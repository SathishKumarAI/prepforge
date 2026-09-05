---
qid: ing_2d8e1cc934__eli5__local
question: 'Q: Why would you still use AWS Textract or Azure AI Search (OCR) when vision
  LLMs exist?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 303
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:47:54-05:00'
sources: []
---

Imagine your computer is a librarian who can read any book you hand it—this is what the new “vision‑LLMs” do: they look at an image and try to understand everything in it, just like reading a page aloud.  
But most libraries still keep a special pair of magnifying glasses called OCR (Optical Character Recognition). Those glasses are built specifically for spotting letters and numbers on paper or scanned documents. They’re tuned to handle messy fonts, skewed pages, low‑contrast scans, and they do it extremely fast and cheaply.

So even though the librarian can read, you still use the magnifying glasses when:
* **Speed matters** – OCR services like AWS Textract or Azure AI Search fire off in milliseconds, while a full vision model might take seconds or more.  
* **Cost is tight** – OCR runs on simple CPU cores; a vision LLM uses pricey GPU time and memory.  
* **Accuracy for text‑heavy documents** – OCR has decades of optimization for exact character placement, checksum validation, and column detection that generic vision models can’t match.  

In short, the librarian (vision LLM) is great for open‑ended understanding, but the magnifying glasses (OCR) remain the go‑to tool when you need quick, reliable text extraction from documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
