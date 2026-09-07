---
qid: ing_65a02ff8ef__faang__local
question: Your agent spends over half its first turn just finding the relevant code.
  How do you fix that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 424
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:40:47-05:00'
sources: []
---

**Clarify**  
You’re building an AI agent that needs to retrieve and execute code snippets. The “first turn” is the planning phase where it scans a large repository; more than 50 % of the cycle is spent locating relevant files, which kills throughput. Confirm: (1) repo size/structure, (2) indexing mechanism, (3) cache policies, (4) frequency of new code additions.

**Approach**  
1. **Pre‑process & index** – build a lightweight inverted index or use an LLM embedding model to map tokens → file paths.  
2. **Incremental caching** – persist the index across sessions and update only changed files.  
3. **Selective prefetching** – maintain a “hot list” of frequently used modules based on usage stats.  
4. **Parallelism** – run indexing in a background thread while the agent plans.

**Depth**  
- Use **FAISS** or **Annoy** for vector similarity search; complexity O(log N) per query, O(N log N) build time.  
- Store metadata (last modified, size) to skip unchanged files.  
- For hot modules, maintain an LRU cache of file contents in RAM (≈200 MB).  
- On a 10 k‑file repo, index creation takes ~2 s; subsequent queries <50 ms.

**Edge Cases**  
- New files added after the agent starts → background reindex.  
- Very large binaries → skip or stream lazily.  
- Concurrent edits → lock or version‑stamp cache entries.

**Optimize & Communicate**  
After implementing, benchmark: first‑turn latency drops from ~2 s to <300 ms. Explain that the trade‑off is a modest extra storage cost (index + cache) and a slight CPU overhead during updates. Highlight how this improves overall agent responsiveness and scalability for larger codebases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
