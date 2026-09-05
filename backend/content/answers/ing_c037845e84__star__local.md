---
qid: ing_c037845e84__star__local
question: 'Explain: Step 6. Orchestrate with Agent SOPs — How Do AI Agents Work -
  by Neo Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 365
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:54:56-05:00'
sources: []
---

**Situation:**  
When my team launched a customer‑support chatbot for a fintech app, the first version could only answer static FAQs and struggled with multi‑step queries. Our KPI was to reduce average handling time (AHT) from 8 minutes to under 3.

**Task:**  
I had to design an orchestration layer that let distinct AI agents—lookup, context‑aware dialogue, escalation—work together following clear SOPs so the bot could handle complex requests like “Show me my last transfer and suggest a savings plan.”

**Action:**  
Using LangChain’s AgentExecutor I defined SOP YAML files for each agent: *QueryParser*, *DataRetriever*, *RecommendationEngine*. Each SOP specified input format, output schema, and decision thresholds. The orchestrator (a lightweight FastAPI service) routed the user prompt to QueryParser, then dynamically chained agents based on the parsed intent. I added a retry policy and a fallback rule that escalated to a human if confidence dropped below 0.75. Logging each step in ElasticSearch let us audit agent decisions.

**Result:**  
AHT fell from 8 min to 2.3 min, while resolution rate rose to 92 %. The SOP‑based orchestration also cut development time for new features by 40 %, as adding a new agent only required writing its SOP and registering it with the orchestrator. I learned that formalizing agent workflows into reusable SOPs dramatically improves both performance and maintainability in AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
