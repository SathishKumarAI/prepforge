---
qid: ing_279213bcff__faang__local
question: 'Explain: Handling Intentional Duplicates — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 453
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:15:47-05:00'
sources: []
---

**Clarify**  
You’re asked to design a web‑crawler that must *avoid intentional duplicates*—pages intentionally replicated across domains or sub‑domains (e.g., “/products” and “https://shop.example.com/products”). Confirm assumptions:  
• We can hash URLs; canonicalization is possible.  
• Duplicates are signaled by identical content, not just same URL.  
• The system must scale to billions of pages.

**Approach**  
1. **URL Normalization** – strip query params, enforce scheme/host canonical form.  
2. **Content Fingerprinting** – compute a lightweight hash (e.g., SHA‑256 on cleaned DOM).  
3. **Duplicate Registry** – a distributed key‑value store indexed by fingerprint; each entry holds canonical URL and metadata.  
4. **Crawler Workflow**  
   - Fetch → normalize → fingerprint.  
   - Check registry: if fingerprint exists, redirect to canonical URL or skip indexing.  
   - If new, add to registry and enqueue for processing.

**Depth**  
*Complexity*: O(1) average lookup/insert in the registry; per‑page cost dominated by hashing.  
*Trade‑offs*: Fingerprint collisions are negligible; using a Bloom filter can reduce storage at the cost of false positives (skip some unique pages).  
*Scalability*: Partition the registry by hash prefix; use consistent hashing to balance load.

**Edge Cases**  
• Dynamic content that changes rarely—cache fingerprint for a TTL.  
• Malicious sites serving identical content with different URLs—hash still catches them.  
• Politeness: ensure duplicate checks happen before politeness delay to avoid wasted fetches.

**Optimize & Communicate**  
Explain how the registry decouples deduplication from crawling, enabling linear scaling of fetchers while keeping a small global state. Highlight that the system can be extended with a machine‑learning model to predict duplicates when content is too large to hash fully, trading accuracy for speed. This structured reasoning demonstrates problem framing, solution design, and scalability—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
