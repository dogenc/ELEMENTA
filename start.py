"""Serve ELEMENTA locally without dependencies or a build step."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
from pathlib import Path
import webbrowser
if __name__ == '__main__':
    root=Path(__file__).resolve().parent/'dist'
    server=ThreadingHTTPServer(('127.0.0.1',8768),partial(SimpleHTTPRequestHandler,directory=str(root)))
    print('ELEMENTA: http://127.0.0.1:8768 — Beenden mit Strg+C')
    webbrowser.open('http://127.0.0.1:8768')
    try: server.serve_forever()
    except KeyboardInterrupt: pass
    finally: server.server_close()
