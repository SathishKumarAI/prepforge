---
qid: ing_2acbd08d33__aws__local
question: 'Explain: `computer` — GUI Automation (optional) — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 506
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:55-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with speeding up feature‑delivery cycles for our SaaS platform by automating repetitive UI tests and allowing developers to generate boilerplate code via an LLM (Claude). The goal was a 30 % reduction in manual test writing time while keeping test coverage above 90 %.  

**Task**  
Build a “Computer → GUI Automation → Claude Code” pipeline that lets engineers write high‑level intents, have Claude output ready‑to‑run Python scripts, and optionally run those scripts against the web UI through Selenium‑like automation.  

**Action**  
1. **Requirements & Design** –  
   * Input: natural language intent + optional UI spec.  
   * Output: (a) Pydantic model of test data, (b) Playwright/Pytest script, (c) CI‑ready Docker image.  
2. **AWS Services** –  
   * **Amazon SageMaker Edge Device** to host Claude for low‑latency inference.  
   * **AWS Lambda** for on‑demand code generation and packaging.  
   * **Amazon ECS Fargate** with GPU‑enabled tasks to run the optional GUI automation in headless browsers.  
3. **Scalability & Cost** –  
   * Autoscaling Lambda (max 10 k req/day) keeps cost <$200/month.  
   * Fargate spot instances for automation reduce spend by 40 %.  
4. **Metrics & Results** –  
   * Test‑writing time dropped from 8 h/week to 5 h/week (37 % reduction).  
   * Coverage stayed at 92 %.  
5. **Learning** – First iteration over‑generated flaky tests; we added a validation layer that checks script idempotency, reducing failures by 25 %.

**Result**  
Delivered a reusable, cloud‑native pipeline that embodies **Customer Obsession** (faster, more reliable testing for end users) and **Ownership** (end‑to‑end design, monitoring, cost control).  

*Bar‑raiser focus*: depth of technical choices, quantified impact, ownership in iterating on failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
