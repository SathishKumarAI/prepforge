---
qid: ing_aa442a8ec6__faang__local
question: You have four hours to build and demo a working AI-powered product. How
  do you spend them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 602
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:20:01-05:00'
sources: []
---

**Clarify**  
The goal is to deliver a *demo‑ready* AI product in 4 h: a minimal user flow, functional inference, and a clear value proposition.  
Assumptions I’d confirm:  

1. Target domain (e.g., image captioning, chat bot).  
2. Available compute (GPU/CPU) and data access.  
3. Deployment medium (web app, CLI, mobile).  
4. Stakeholder expectations—what “working” means for the demo.

---

**Approach**  
| Time | Activity | Rationale |
|------|----------|-----------|
| 0–30 min | Pick a lightweight task & pre‑trained model (e.g., HuggingFace `distilbert-base-uncased` for text classification). | Cuts data prep and training time. |
| 30–60 min | Build inference pipeline: load model, preprocess input, postprocess output. | Core functionality; keeps scope tight. |
| 60–90 min | Wrap in a simple web UI (Streamlit or Flask + HTML). | Fast prototyping & instant visual feedback. |
| 90–120 min | Integrate sample data set (or scrape a few examples) and add basic error handling. | Demonstrates robustness. |
| 120–180 min | Benchmark latency, profile memory; tune batch size / quantization if needed. | Shows performance awareness. |
| 180–240 min | Polish demo: clear instructions, a “why it matters” slide, rehearsed walk‑through. | Ensures smooth presentation. |

---

**Depth**  
- Use **ONNX Runtime** or **TorchScript** to serialize the model for quick loading.  
- Leverage **FastAPI** with `uvicorn` for low‑latency inference.  
- For UI, Streamlit’s `st.text_input` + `st.write` gives instant interactivity.  
- Complexity: *O(1)* inference per request; memory ~ model size (~50 MB).  

---

**Edge Cases**  
- Empty or malformed input → return graceful error.  
- Unsupported language tokens → fallback to a generic “unknown” label.  
- GPU unavailability → fall back to CPU with reduced batch size.

Test by feeding edge inputs, measuring throughput, and verifying UI stability under rapid consecutive requests.

---

**Optimize & Communicate**  
If time allows, add **model quantization** (e.g., `torch.quantization`) to halve latency.  
During the demo, narrate: “I chose a distilled model to meet our 4‑hour constraint; here’s how we load it, serve predictions, and keep the interface responsive.”  

This structure demonstrates clear prioritization, technical rigor, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
