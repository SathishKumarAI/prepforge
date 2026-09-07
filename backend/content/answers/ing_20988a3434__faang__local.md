---
qid: ing_20988a3434__faang__local
question: 'Explain: Object-oriented design interview questions with solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 506
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:00:23-05:00'
sources: []
---

**Clarify**  
The interviewer asks for *typical* OOD questions in ML contexts and how you’d solve them.  
Assumptions:  
1) Candidates know basic OO concepts (encapsulation, inheritance, polymorphism).  
2) The focus is on modeling ML workflows (data ingestion → preprocessing → model → evaluation).  

**Approach**  
1. List the most common interview prompts.  
2. For each, sketch a minimal class diagram and explain why it satisfies SOLID principles.  
3. Show a brief code snippet (Python‑style) that ties the design together.  

**Depth**  

| Prompt | Key Design Idea | Skeleton Code |
|--------|-----------------|---------------|
| *Design a reusable data pipeline.* | **Interface `IDataSource` → concrete sources; `IPreprocessor`; `IModel`. Use dependency injection.* | ```python<br>class IDataSource(ABC):\n    @abstractmethod\n    def load(self)->DataFrame:...\n``` |
| *Implement a factory for ML models (SVM, RandomForest, NN).* | **Factory pattern** to hide construction logic. | ```python<br>def model_factory(name:str)->IModel:\n    if name=='svm': return SVM()\n    elif name=='rf': return RandomForest()\n``` |
| *Allow adding new metrics without touching existing code.* | **Strategy pattern** for metrics. | ```python\nclass Metric(ABC):\n    @abstractmethod\n    def score(self, y_true, y_pred)->float:...\n```. |
| *Handle versioned datasets and model checkpoints.* | **Composite + Observer** to manage collections and notify on updates. | ```python\nclass DatasetCollection:\n    observers=[...]\n``` |

**Edge Cases**  
- Circular dependencies between preprocessors → use composition over inheritance.  
- Large data streams → lazy loading via generators in `IDataSource`.  
- Multi‑threaded training → thread‑safe singleton for model registry.

**Optimize & Communicate**  
Explain trade‑offs: e.g., using a simple factory is fast but less flexible than reflection; composite gives fine control but adds overhead. Conclude by summarizing how each pattern keeps the system open for extension, closed for modification—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
