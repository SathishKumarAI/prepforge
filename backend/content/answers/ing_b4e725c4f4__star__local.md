---
qid: ing_b4e725c4f4__star__local
question: 'Explain: JRE vs JVM — GitHub - Anshul619/Java: This repo contains java
  \"how to to-dos\", concepts etc. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 319
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:21-05:00'
sources: []
---

**Situation:** While leading a migration of our legacy microservice to Java 17, the team was confused about why the build succeeded locally but crashed on the CI runner, complaining about missing runtime classes.

**Task:** I needed to clarify the difference between JVM and JRE so everyone understood what the CI environment actually provided and how to supply the correct artifacts for deployment.

**Action:** I organized a quick demo using Docker. First, I ran `java -version` inside an Alpine image with only the OpenJDK runtime (`openjdk-17-jre`). The container started but our custom agent failed because it relied on development tools like `javac`. Then I swapped in the full JDK image (`openjdk-17-jdk`) and showed how the same binary now ran correctly. I explained that the JVM is just the virtual machine engine, while the JRE bundles the JVM plus runtime libraries; the JDK adds compiler and debugging tools. I also pointed out how Maven’s `pom.xml` can explicitly declare `<scope>provided</scope>` for JRE-only dependencies to avoid shipping unnecessary binaries.

**Result:** The CI pipeline was updated to use the JDK image, eliminating 30 minutes of failed builds per week. Team members left with a clear mental model: JVM = engine, JRE = engine + runtime libs, JDK = engine + runtime libs + dev tools. This knowledge cut future deployment friction by 80 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
