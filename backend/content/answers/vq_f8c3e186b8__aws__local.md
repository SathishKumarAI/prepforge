---
qid: vq_f8c3e186b8__aws__local
question: What is SBT? What is the best build tool to develop play and scala applications?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 363
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:23:14-05:00'
sources: []
---

**SBT (Scala Build Tool)**  
*Leadership Principles:* **Ownership**, **Dive Deep**  

**Situation:** While modernizing a data‑pipeline team’s Scala/Play stack, we needed a single tool that handled dependency resolution, incremental compilation, and test orchestration without compromising CI speed.  

**Task:** Replace the legacy Ant + manual Ivy scripts with something lightweight yet feature‑rich.  

**Action:** I championed **SBT**, because it natively supports Play’s “run” mode, hot reload, and has a vast ecosystem of plugins (sbt‑docker, sbt‑assembly). I rewrote our build.sbt to:
- Declare all transitive dependencies via Maven Central (`libraryDependencies += "com.typesafe.play" %% "play" % "2.8.8"`).
- Use `Compile / run` for local dev and `Test / test` for CI.
- Add a Docker plugin to package the Play app into an ECR image, enabling ECS deployment.

I also integrated **sbt‑coverage** and **scalafmt** to enforce code quality and formatting.  

**Result:**  
- Build time dropped from ~12 min (Ant) to 3 min (SBT).  
- CI pipeline throughput increased by 35%, freeing 4 hrs of dev time per week.  
- Deployment latency fell from 10 min to under 2 min due to pre‑built Docker images.

**Takeaway:** Choosing the right build tool is a classic **Ownership** decision—understand team pain points, evaluate alternatives deeply, and iterate on measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
