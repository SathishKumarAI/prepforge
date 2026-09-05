---
qid: ing_14f0902446__star__local
question: 'Explain: The Business Problem — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 346
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:10:00-05:00'
sources: []
---

**Situation** – In early 2024, our client—a regional insurance broker—had a legacy knowledge base that was siloed across three outdated portals. Their support team spent an average of 45 minutes per ticket searching for policy details, and CSAT had slipped to 78%. The company needed a unified AI‑powered assistant that could surface the right policy information instantly.

**Task** – I was tasked with designing and deploying a “MCP Knowledge Agent” that would ingest all legacy content, map it to a single ontology, and expose an API for real‑time question answering. The goal was to cut average ticket resolution time by 60% and lift CSAT above 90%.

**Action** – First, I used Azure Cognitive Search with semantic indexing to crawl PDFs, HTML pages, and internal wiki entries, normalizing them into a unified schema. Next, I trained an OpenAI GPT‑4 fine‑tuned model on 12 k policy documents, incorporating a custom prompt that referenced the ontology. The agent was wrapped in an Azure Functions endpoint, integrated with the broker’s Zendesk via webhooks, and equipped with role‑based access controls to protect sensitive data.

**Result** – Within three weeks of go‑live, average resolution time dropped from 45 minutes to 18 minutes—a 60% reduction. CSAT climbed to 92%, exceeding the target. I learned that combining semantic search with fine‑tuned LLMs can dramatically reduce knowledge friction, but careful data governance and rapid iteration are key to deployment success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
