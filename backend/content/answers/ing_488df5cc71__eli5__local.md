---
qid: ing_488df5cc71__eli5__local
question: 'Explain: Step 3: Design core components — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 404
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:00-05:00'
sources: []
---

**Step 3 – Design the Core Components**

Think of building a big, smart library that can read and answer questions about any book instantly.  
The *core components* are like the main parts of this library:

| Component | What it does | Library Analogy |
|-----------|--------------|-----------------|
| **Data Ingestion** | Gathers raw data (books) from many places. | A librarian who collects new books from publishers and patrons. |
| **Storage & Indexing** | Keeps all the text in a searchable format. | The library’s catalog system that lets you find a book by title, author, or topic. |
| **Model Training Engine** | Trains the machine‑learning model on that data. | A research department that reads every book and writes summaries for future use. |
| **Inference Service** | Answers user questions using the trained model. | The library’s help desk where visitors ask a question and get an answer immediately. |
| **Monitoring & Logging** | Tracks performance, errors, and usage. | Library staff noting how many people visit each section and any issues with books or computers. |

Designing these parts means deciding:

* **How data flows** from ingestion to storage (e.g., batch vs. real‑time).  
* **What databases or file systems** will hold the text (SQL, NoSQL, object storage).  
* **Which machine‑learning framework** (TensorFlow, PyTorch) and hardware (CPU, GPU) for training.  
* **How to expose the inference service** (REST API, gRPC) so it can handle many requests.

By mapping each component to a familiar library function, you see how they fit together: collect data → store & index → train model → serve answers → monitor everything. This clear structure is what interviewers look for when you design large‑scale ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
