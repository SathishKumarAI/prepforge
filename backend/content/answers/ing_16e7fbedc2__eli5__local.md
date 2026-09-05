---
qid: ing_16e7fbedc2__eli5__local
question: 'Explain: Introduction — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 309
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:11:50-05:00'
sources: []
---

**Think of the Internet as a giant library that everyone can visit.**  
When you type a URL (like `https://www.example.com`) into your browser, it’s like writing down an address on a postcard and sending it through a series of post offices.

1. **Browser to DNS “Post Office”** – Your computer asks a Domain‑Name System server what the physical IP address is for that name.  
2. **DNS returns the “book shelf number” (IP)** – The browser now knows where the web‑server lives.  
3. **TCP connection “mail delivery route”** – Your browser opens a TCP socket, like reserving a lane on the highway to that server.  
4. **HTTP request “letter”** – It sends an HTTP GET message, telling the server, “Give me the page at `/`.”  
5. **Server replies with data** – The web‑server reads the requested file and streams it back over the same route.  
6. **Browser renders the page** – Your browser receives HTML/CSS/JS and paints the webpage on your screen.

Each step is a tiny, well‑defined service (DNS, TCP/IP, HTTP) that cooperates to turn an address into a visible web page—just like postal workers turning a written address into a delivered letter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
