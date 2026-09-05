---
qid: ing_726628f207__star__local
question: 'Explain: API References — GitHub - microsoft/semantic-kernel: Integrate
  cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 379
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:10-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a customer‑support chatbot that needed to pull product specs from our internal knowledge base. The feature release deadline was only two weeks away, and we had no time to train or fine‑tune a model ourselves.

**Task:**  
I had to integrate an LLM that could understand natural language queries, retrieve the correct documents, and generate concise responses—all within the remaining sprint cycle.

**Action:**  
I chose Microsoft’s Semantic Kernel library because its API references on GitHub provide a plug‑in architecture. I started by cloning the repo, installing the `semantic-kernel` NuGet package, and wiring up the Azure OpenAI service credentials. Using the kernel’s `PromptTemplate` feature, I built a prompt that combined the user query with a retrieval prompt:  
```python
kernel = SemanticKernel()
kernel.add_service(AzureOpenAIChatCompletion(...))
retriever = kernel.create_function("retrieve_docs", retrieve_func)
prompt = PromptTemplate.from_template(
    "User asks: {question}\nRetrieve relevant docs:\n{docs}")
```
The `retrieve_func` leveraged Azure Cognitive Search to pull the top 3 matching documents. I then chained the retrieval and generation steps using the kernel’s `FunctionCollection`, which handled context passing automatically. Finally, I wrapped everything in a lightweight ASP.NET Core API endpoint.

**Result:**  
Within 5 days we had a production‑ready chatbot that reduced support ticket volume by **32%** on first contact and cut average response time from 4 min to under 30 sec. I learned how Semantic Kernel’s API references can turn a complex LLM workflow into reusable, testable components, saving both time and engineering effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
