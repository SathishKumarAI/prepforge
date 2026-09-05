---
qid: ing_3dc7aca8b9__eli5__local
question: How can I configure a proxy for the VM (if I'm behind the GFW, or I don't
  want some of my tasks to be identified as bot and get lower scores)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 622
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:13:49-05:00'
sources: []
---

Imagine your virtual machine is like a traveler who must go through a busy city gate (the internet). If the gate has strict security guards that suspect any traveler carrying certain items (your data or bot‑like traffic), you can give your traveler a “special pass” called a proxy. The pass lets the traveler walk through a side entrance, keeping their identity hidden and avoiding suspicion.

**What is a proxy?**  
A proxy is an intermediary server that receives your VM’s requests, forwards them to the internet, and returns the responses back to you. It can hide your real IP address and modify headers so the destination site sees traffic coming from the proxy instead of your machine.

**How to set it up on a Windows or Linux VM:**

1. **Choose a reliable proxy service**  
   - A paid VPN provider or an HTTP/HTTPS proxy that supports authentication (username/password).  
2. **Get the proxy details**  
   - You’ll receive an address like `proxy.example.com` and a port such as `3128`.  
3. **Configure your operating system to use the proxy**  

   *Windows*  
   - Open Settings → Network & Internet → Proxy.  
   - Toggle “Use a proxy server” on, enter the address and port, check “Authentication required,” then type your username and password.

   *Linux (Ubuntu/Debian)*  
   ```bash
   export http_proxy="http://user:pass@proxy.example.com:3128/"
   export https_proxy="https://user:pass@proxy.example.com:3128/"
   ```
   - Add those lines to `~/.bashrc` or `/etc/environment` so they load for every session.

4. **Tell your applications to use the proxy**  
   - Most browsers (Chrome, Firefox) will automatically pick up system settings.  
   - For command‑line tools like `curl`, you can add `-x http://proxy.example.com:3128`.  
   - If you’re running a Python script with `requests`, set `proxies = {"http": proxy_url, "https": proxy_url}`.

5. **Test the connection**  
   - Run `curl https://ifconfig.me` (or similar) from your VM. The returned IP should be that of the proxy, not your original one.  

6. **Keep the proxy secret**  
   - Store credentials in a secure file (`~/.netrc`) or use environment variables instead of hard‑coding them.

**Why this helps behind the Great Firewall (GFW)**  
The GFW watches for traffic patterns that look like bots. By routing through an external proxy, your VM’s requests appear to come from a different IP and may carry different headers, reducing the chance of being flagged or throttled.

With these steps, your VM can travel safely through any gate—whether it’s a strict firewall or a site wary of automated traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
