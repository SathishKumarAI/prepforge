---
qid: ing_df7ce3af9c__faang__local
question: What AI models and providers does Mastra support?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 599
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:18:54-05:00'
sources: []
---

**Clarify**  
You’re asking which AI model families and cloud‑provider services are currently integrated into the Mastra platform. I’ll assume you mean “ready‑to‑use” models (LLMs, vision, speech) that can be invoked through Mastra’s SDK or UI.

**Approach**  
1. List major LLM families (OpenAI GPT‑4, Anthropic Claude, Cohere, Gemini).  
2. Include multimodal and specialized models (Vision‑LLM, Speech‑to‑Text, Text‑to‑Speech).  
3. Map each to the cloud provider offering it (AWS Bedrock, Azure OpenAI Service, GCP Vertex AI, Meta’s Llama‑2).  
4. Note any proprietary or on‑prem options Mastra can host.

**Depth**  
| Model Family | Provider(s) | Typical Use | Integration in Mastra |
|--------------|-------------|------------|-----------------------|
| **Large Language Models** | OpenAI GPT‑4 (Azure, AWS), Anthropic Claude (AWS Bedrock), Cohere Command (AWS Bedrock), Gemini (GCP Vertex AI) | Conversational agents, code generation, summarization | SDK exposes `model_id` strings; auto‑switch via config |
| **Vision‑LLM** | Meta Llama‑2 70B Vision (Meta Cloud), Anthropic Claude‑3 Sonnet with vision token | Image captioning, VQA | Mastra’s Vision API wraps the endpoint |
| **Speech** | AWS Transcribe & Polly, Azure Speech Service, GCP Speech-to-Text | ASR / TTS for chatbots | `speech_config` section in Mastra config |
| **On‑Prem** | HuggingFace Transformers (Llama‑2), OpenVINO models | Privacy‑sensitive workloads | Mastra supports Dockerized inference nodes |

All providers are accessed through Mastra’s unified API; you can toggle the backend by setting `provider: "aws"` or `provider: "gcp"` in the config.  

**Edge Cases**  
- **Quota limits**: AWS Bedrock may throttle high‑frequency calls.  
- **Model deprecation**: Anthropic moves from Claude‑2 to Claude‑3, requiring ID updates.  
- **Latency spikes**: Vision models on Meta Cloud can be slower in certain regions.

**Optimize & Communicate**  
Future improvements could include auto‑scaling based on traffic and a cost‑monitoring dashboard that maps each request to provider billing. When presenting this, I’d start with the high‑level table, then drill into one model example (e.g., GPT‑4 via Azure) to illustrate how configuration changes propagate through Mastra’s SDK. This demonstrates both breadth and depth while keeping the explanation concise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
