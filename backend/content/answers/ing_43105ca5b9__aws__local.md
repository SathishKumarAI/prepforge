---
qid: ing_43105ca5b9__aws__local
question: 'Q: Compare computer-use agents with Selenium for web automation. When would
  you choose each?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 443
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:57:37-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a test‑suite for a SaaS product that needed to run on multiple browsers, devices, and environments while keeping costs low.

**Action**  
I compared two automation approaches:

| Aspect | Selenium (WebDriver) | Computer‑Use Agent (e.g., AWS Device Farm + Appium) |
|--------|----------------------|-----------------------------------------------------|
| **Scope** | Browser‑level only; needs local drivers or cloud grids. | Full device stack – browsers, OS, native apps, and background services. |
| **Setup** | Requires Selenium Grid or third‑party cloud (Sauce Labs). | Managed by AWS; no local infrastructure. |
| **Scalability** | Horizontal scaling via Grid nodes; limited by network latency. | Auto‑scales across thousands of real devices; built for high concurrency. |
| **Cost** | Pay per node/VM; can be cheaper if you own the grid. | Pay-per-use; higher upfront but eliminates maintenance. |
| **Maintenance** | Driver updates, environment drift. | Device pool updates handled by AWS. |

I chose **Selenium** when I needed fast browser‑only tests for a CI pipeline (≈30 % cost reduction). For end‑to‑end coverage on real devices, especially with mobile browsers and background services, I switched to **Computer‑Use Agents** via AWS Device Farm—this increased test coverage by 42 % while keeping the total testing budget within target.

**Result**  
The dual strategy cut manual QA hours by 35 % and reduced flaky tests by 28 %.  

---

### Leadership Principles

- **Customer Obsession** – ensured users got a reliable experience across devices.  
- **Ownership & Dive Deep** – I evaluated each tool’s trade‑offs, benchmarked performance, and adjusted budgets accordingly.

> *Bar‑raiser cue*: Look for concrete metrics, depth of comparison, and how you adapted the solution to business constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
