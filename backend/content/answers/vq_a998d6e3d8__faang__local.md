---
qid: vq_a998d6e3d8__faang__local
question: what is the functionality of jps command?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 439
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:27:12-05:00'
sources: []
---

**Clarify**  
The interviewer asks for the purpose of the `jps` command, which is part of the Java Development Kit (JDK). I’ll confirm that we’re talking about the JVM tool that lists running Java processes on a host and not some custom script.

**Approach**  
Explain what `jps` does in plain terms, then dive into its implementation details: it queries the HotSpot diagnostic service, maps process IDs to JVM names, and optionally shows the main class or jar. Mention typical use‑cases (debugging, monitoring, automation scripts).

**Depth**  
- `jps [options]` prints a short list of active Java processes on the local machine.  
- Each line contains `<pid> <mainClass|jar>`; if no main class is found it shows “(unknown)”.  
- Options such as `-l` display the fully qualified main class or jar path, `-m` shows arguments to the main method, and `-v` prints JVM arguments.  
- Internally, `jps` connects to the HotSpot diagnostic library (`libjdwp`) via a TCP port that each JVM opens on startup (default 5005) or through the JMX Agent. It then parses the returned string of process descriptors.

**Edge Cases**  
- Non‑Java processes are omitted; only those with a Java agent listening will appear.  
- On systems without the HotSpot diagnostic service enabled, `jps` may list nothing even if Java apps run.  
- Running under non‑root can limit visibility to processes owned by the same user.

**Optimize & Communicate**  
I’d note that for large clusters you’d wrap `jps` in a shell script or use tools like `jcmd`/`jstat` for richer diagnostics, and mention that on distributed systems you might query remote JVMs via JMX instead of local `jps`. This keeps the answer concise yet demonstrates depth, trade‑offs, and real‑world applicability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
