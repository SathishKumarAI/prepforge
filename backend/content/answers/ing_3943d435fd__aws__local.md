---
qid: ing_3943d435fd__aws__local
question: 'Explain: Raw API Calls: The Minimal Path — LLM Orchestration Frameworks
  Compared: LangChain vs. LlamaIndex vs. Raw API Calls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 448
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:28-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a low‑latency, cost‑effective chatbot for an e‑commerce platform that needed to pull product data in real time while respecting SLA of < 200 ms per user query.

**Action**  
1. **Framework comparison** – I benchmarked LangChain (pipeline orchestration), LlamaIndex (index‑based retrieval) and raw OpenAI calls.  
2. **Design** – chose **raw API calls** with a lightweight caching layer in **Amazon ElastiCache‑Redis** to store recent prompt–response pairs.  
3. **AWS stack** –  
   * **Lambda** for stateless inference dispatch,  
   * **API Gateway** for throttling and authentication,  
   * **Step Functions** for fallback logic (e.g., switch to a cheaper GPT‑3.5 if latency spikes).  

4. **Metrics** – measured throughput, cost per 1k tokens, and response time:  
   * LangChain: 350 ms avg, $0.012/token.  
   * LlamaIndex: 280 ms avg, $0.009/token.  
   * Raw API + cache: 180 ms avg, $0.006/token.

**Result**  
Implemented raw calls with caching; latency dropped by **45%**, cost per query fell by **48%**, and we handled 4× the traffic without extra ops overhead.  

**Learning** – Over‑engineering a framework can hide simple optimizations; always start from the “minimal path” and iterate based on data.

---

### Leadership Principles Highlighted  
- **Customer Obsession**: Prioritized user latency & cost.  
- **Ownership**: Took end‑to‑end responsibility for design, deployment, and monitoring.  

*Bar‑raiser focus*: Depth of technical trade‑offs, quantifiable impact, and iterative learning from benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
