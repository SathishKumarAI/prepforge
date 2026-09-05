---
qid: ing_ddfeb07abf__star__local
question: 'Explain: Write Job Descriptions — GitHub - crewAIInc/crewAI: Framework
  for orchestrating role-playing, autonomous AI agents. By fostering collaborative
  intelligence, CrewAI empowers agents to work together seamlessly, tackling complex
  tasks. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 278
output_tokens: 328
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:52:28-05:00'
sources: []
---

**Situation**  
At a startup building an autonomous research assistant platform, our internal “CrewAI” framework needed a new set of role definitions to handle multi‑step literature reviews. The existing agent list was generic and caused overlapping responsibilities, leading to duplicated searches and stale data.

**Task**  
I had to design clear, actionable job descriptions for each AI role—“Literature Curator,” “Summarizer,” “Relevance Evaluator,” and “Citation Manager”—so that agents could orchestrate without human oversight, reduce redundancy, and keep the review cycle under 48 hours.

**Action**  
Using GitHub Issues to capture stakeholder input, I drafted concise specs in markdown, including:
- **Objective** and **output format** (e.g., Curator produces a list of URLs with metadata).
- **Trigger conditions** for role activation.
- **API calls** and **LLM prompt templates** tailored to each function.
I then ran a pilot with the CrewAI orchestrator, iterating on prompts and adding “fallback” checks that logged failures to a shared Slack channel. This iterative loop used real‑time metrics from the framework’s built‑in telemetry.

**Result**  
The refined role descriptions cut duplicate searches by 70 % and shortened review time from 72 hours to 42 hours—meeting our SLA. I learned that precise, measurable job specs, coupled with live feedback loops, are essential for scalable autonomous agent orchestration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
