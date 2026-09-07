---
qid: ing_5f5350b4d3__faang__local
question: 'Explain: A 90-Day Learning Path — Research Radar'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 494
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:25:58-05:00'
sources: []
---

**Clarify**  
You want a concrete 90‑day learning plan that lets you *research* and *radar‑scan* the AI landscape—i.e., quickly surface emerging trends, tools, and research papers while building a solid foundation.

Assumptions to confirm:  
- You have basic programming (Python) knowledge.  
- Access to academic databases & cloud compute is available.  
- You’re aiming for depth in one sub‑domain (e.g., NLP or RL).

**Approach**  
1. **Foundational sprint (Weeks 1–2)** – Core ML theory, PyTorch/TensorFlow.  
2. **Research funnel (Weeks 3–5)** – Weekly paper‑reading cycle + citation graph mining.  
3. **Tooling & prototyping (Weeks 6–8)** – Experiment with AutoML, Hugging Face Hub, RLlib.  
4. **Trend radar (Weeks 9–10)** – Track arXiv RSS feeds, ACL/ICLR workshops; set up alerts on Google Scholar.  
5. **Synthesis & showcase (Week 11–12)** – Write a short report or demo, publish findings on GitHub.

**Depth**  
- Use *Paper2Vec* to embed papers; cluster via k‑means for hot topics.  
- Automate downloads with arXiv API; parse PDFs using GROBID.  
- Leverage GPU instances (e.g., AWS EC2 p3) for quick fine‑tuning of transformer models.  
Complexity: O(N log N) for clustering, negligible for manual reading.

**Edge Cases**  
- Paper overload → filter by citation count & recency.  
- API rate limits → cache results; use exponential backoff.  
- Model overfitting on small datasets → apply early stopping and cross‑validation.

**Optimize & Communicate**  
Iterate the funnel: after week 5, prune low‑impact topics. Present progress weekly to a mentor or peer group to get feedback. Conclude with a portfolio repo that documents code, experiments, and a concise “AI Radar” dashboard (e.g., Plotly) showing trend trajectories. This structure demonstrates disciplined learning, technical depth, and clear communication—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
