---
qid: ing_3dc7aca8b9__star__local
question: How can I configure a proxy for the VM (if I'm behind the GFW, or I don't
  want some of my tasks to be identified as bot and get lower scores)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 377
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:46-05:00'
sources: []
---

**Situation:**  
During a semester‑long NLP project on Chinese social media sentiment analysis, my university’s campus network blocked direct access to the public APIs I needed (e.g., Twitter streaming and Hugging Face model hub). Every attempt from my VM in Azure hit 403s, and repeated failed requests were flagged as bot traffic, throttling my download speed to a crawl.

**Task:**  
I had to set up a reliable outbound proxy for the VM so that all HTTP/HTTPS traffic routed through a trusted IP, bypassing the Great Firewall, while keeping API keys hidden from the cloud provider’s logs and avoiding bot detection.

**Action:**  
1. I spun up an Ubuntu VM in Azure as a lightweight SOCKS5 proxy using **Shadowsocks‑R** with a strong password and TLS encryption.  
2. Configured the main ML VM to use this proxy by editing `/etc/environment` and setting `http_proxy`, `https_proxy`, and `ALL_PROXY`.  
3. Updated my Python scripts (requests, Hugging Face `transformers`) to respect these environment variables; added a retry strategy with exponential backoff to mitigate occasional network hiccups.  
4. Tested the setup by streaming 10 GB of Twitter data and downloading three large transformer models in under an hour—an order‑of‑magnitude speedup compared to the blocked baseline.

**Result:**  
The proxy allowed uninterrupted, fast access to external resources, reducing API throttling incidents from 25% to <1%. I completed the dataset within two weeks, achieved a sentiment accuracy of 84%, and learned how to balance encryption, latency, and compliance when routing traffic through a corporate firewall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
