---
qid: ing_909369d9a4__faang__local
question: What is domain name resolution? — What Happens When You Type a URL Into
  Your Browser? - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 644
total_tokens: 888
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:20:26-05:00'
sources: []
---

**Domain Name Resolution – “What happens when you type a URL into your browser?”**

| Step | What it is | Why it matters |
|------|------------|----------------|
| **1. User types `https://www.example.com`** | Browser parses the hostname (`www.example.com`). | Determines target server. |
| **2. Check local cache** | DNS resolver in OS/Browser looks for cached A/TXT/etc. records. | Fastest path; reduces latency. |
| **3. Recursive query to root servers** | If miss, query one of 13 root name servers (`root-servers.net`). | Locate TLD servers (e.g., `.com`). |
| **4. Query TLD server** | Root replies with address of `.com` nameservers; browser asks them. | Narrow down to authoritative zone for `example.com`. |
| **5. Authoritative DNS query** | TLD sends IP of the authoritative name server for `example.com`; final query retrieves A/AAAA record. | Final mapping: hostname → IP address(es). |
| **6. Resolve CNAME chain (if any)** | If a CNAME is returned, repeat steps 2‑5 for target domain. | Handles aliasing and CDN edge routing. |
| **7. TLS handshake** | Browser initiates HTTPS; verifies certificate chain against root CAs. | Ensures confidentiality & authenticity. |
| **8. TCP connection / HTTP request** | Connect to IP (usually over port 443), send HTTP/2 request, receive response. | Final data transfer. |

### Clarify
- *Assumptions*: We’re using IPv4/IPv6; DNS caching enabled; HTTPS default.

### Approach
1. Parse URL → hostname.  
2. Query local cache → if miss, recursive lookup via root → TLD → authoritative servers.  
3. Resolve CNAMEs recursively.  
4. Establish TLS handshake and HTTP connection.

### Depth
- **Complexity**: Each DNS step is O(1) network round‑trip; total latency ≈ 2–5 RTTs (~100 ms).  
- **Caching**: TTL dictates how long records stay in cache, reducing future lookups.  
- **DNSSEC**: Adds signature verification to prevent spoofing.  

### Edge Cases
- NXDOMAIN (non‑existent domain).  
- CNAME loops or exceeding recursion depth.  
- DNS poisoning / cache snooping.  
- IPv6 vs IPv4 fallback.

### Optimize & Communicate
- Use *recursive resolver* at ISP level; deploy *anycast* root/TLD servers for load balancing.  
- Leverage *DNS prefetching* in browsers to hide latency.  
- Explain trade‑offs: faster lookups vs security (e.g., DNSSEC adds validation cost).  

**Result:** The browser turns a human‑readable URL into an IP address, verifies the server’s identity, and fetches the requested resource—all within milliseconds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
