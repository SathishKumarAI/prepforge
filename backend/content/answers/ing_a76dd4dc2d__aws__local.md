---
qid: ing_a76dd4dc2d__aws__local
question: Why Hybrid Search (Vector + Full-Text)? — Real Time Search
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 470
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:04-05:00'
sources: []
---

**Why Hybrid Search? – A Customer‑Obsessed, Data‑Driven Answer**

*Situation:* I led the redesign of a real‑time recommendation engine for a global e‑commerce platform where users searched millions of product listings. Pure full‑text search yielded high precision but lagged on semantic relevance; pure vector search returned relevant items but missed exact keyword matches, hurting conversion rates.

*Task:* Build a hybrid search that delivers **real‑time** results (≤150 ms latency) while improving click‑through rate (CTR) by at least 15%.

*Action:*  
1. **Architecture:**  
   * Store vectors in **Amazon Kendra** (semantic index) and full‑text terms in **Elasticsearch Service** (OpenSearch).  
   * Use a lightweight **Lambda@Edge** function to merge results: first query OpenSearch for keyword hits, then score them against the vector similarity from Kendra.  
2. **Scalability & Availability:**  
   * Auto‑scaling domain in OpenSearch with dedicated warm nodes; Kendra handles 10 M vectors at <200 ms per request.  
   * Global replication via Route 53 latency routing ensures sub‑100 ms response for any region.  
3. **Cost Optimization:**  
   * Spot instances for non‑critical OpenSearch nodes, reserved capacity for Kendra to lock in predictable pricing.  

*Result:* After deployment, CTR rose from 2.4% to **2.86%** (+15%), and average search latency dropped to **120 ms**. The hybrid model also reduced duplicate hits by 30%, improving user satisfaction scores.

---

### Leadership Principles Highlighted  
- **Customer Obsession:** Directly measured impact on conversion rates.  
- **Dive Deep & Ownership:** Detailed trade‑offs between services, cost, and performance.  

**Bar‑raiser Note:** I demonstrated ownership by iterating on the architecture after observing latency spikes in staging, deep-diving into query plans, and learning that combining vector and keyword indices yields the best balance of relevance and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
