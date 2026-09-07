---
qid: ing_87911e8628__faang__local
question: 'Explain: Dependency graph example — GitHub - spotify/luigi: Luigi is a
  Python module that helps you build complex pipelines of batch jobs. It handles dependency
  resolution, workflow management, visualization etc. It also comes with Hadoop support
  built in. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 279
output_tokens: 589
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:59:18-05:00'
sources: []
---

**Clarify**  
The question asks for a concrete example of a *dependency graph* in the context of Luigi (a Python workflow engine). I’ll explain how Luigi models tasks and their dependencies, then illustrate with a simple ETL pipeline.

**Approach**  
1. Define Luigi’s core concepts: `Task`, `Target`, `requires()`.  
2. Show how `requires()` builds a directed acyclic graph (DAG).  
3. Provide a minimal code example that pulls data → transforms → writes output.  
4. Highlight execution order, parallelism, and Hadoop integration.

**Depth**  

| Component | What it does |
|-----------|--------------|
| **Task** | A unit of work; defines `run()` and outputs. |
| **Target** | File or Hive table; Luigi checks if exists to skip recomputation. |
| **requires()** | Returns a list of upstream tasks → builds edges in the DAG. |

```python
import luigi
from luigi.contrib.hdfs import HdfsTarget

class Extract(luigi.Task):
    date = luigi.DateParameter()

    def output(self): return HdfsTarget(f"/data/raw/{self.date}.csv")

    def run(self):
        # pull data from API and write to HDFS
        ...

class Transform(Extract):
    def requires(self): return Extract(date=self.date)

    def output(self): return HdfsTarget(f"/data/clean/{self.date}.parquet")

    def run(self):
        # read raw, clean, write parquet
        ...

class Load(Transform):
    def requires(self): return Transform(date=self.date)
    def output(self): return HdfsTarget(f"/data/final/{self.date}.parquet")
    def run(self): pass  # maybe push to Hive

if __name__ == "__main__":
    luigi.run()
```

*Execution*: Luigi first checks `Load` → sees it requires `Transform`, which in turn requires `Extract`. The graph is a straight line, but adding parallel tasks (e.g., split by region) creates branching. Hadoop support comes via `HdfsTarget` and optional `SparkTask`.

**Edge Cases**  
- Circular dependencies → Luigi raises an exception.  
- Missing upstream output → downstream tasks will retry until success.  
- Large DAGs may hit recursion limits; use `luigi.TaskGroup` or flatten.

**Optimize & Communicate**  
For scaling, enable *dynamic* task generation (e.g., `yield` in `requires()`) and leverage Luigi’s built‑in caching to avoid recomputation. I’d explain that the dependency graph guarantees deterministic execution order while allowing parallelism across independent branches—exactly what big‑data pipelines need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
