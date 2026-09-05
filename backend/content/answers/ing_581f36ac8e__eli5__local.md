---
qid: ing_581f36ac8e__eli5__local
question: 'Explain: Installing Sysbench — How to Benchmark PostgreSQL Performance
  Using Sysbench | Severalnines'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 394
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:56:11-05:00'
sources: []
---

Think of **Sysbench** as a stopwatch that can run a set of “work‑out” drills on your PostgreSQL database, just like a coach times athletes in different events to see how fast they can go.

1. **Install Sysbench**  
   - On Ubuntu/Debian: `sudo apt-get install sysbench` (or use Homebrew on macOS).  
   - It’s a small program that sits beside PostgreSQL and will send queries for you.

2. **Prepare the test database**  
   ```bash
   createdb sb_test
   sysbench --db-driver=pgsql --pgsql-host=localhost \
            --pgsql-port=5432 --pgsql-user=postgres \
            --pgsql-db=sb_test --tables=10 --table-size=100000 \
            oltp_read_write prepare
   ```
   This builds a set of tables the “coach” will hit.

3. **Run the benchmark**  
   ```bash
   sysbench --db-driver=pgsql --pgsql-host=localhost \
            --pgsql-port=5432 --pgsql-user=postgres \
            --pgsql-db=sb_test --threads=4 --time=60 oltp_read_write run
   ```
   Sysbench fires thousands of read/write commands from 4 “athletes” (threads) for 60 seconds, then reports transactions per second and latency.

4. **Clean up**  
   ```bash
   sysbench oltp_read_write cleanup
   dropdb sb_test
   ```

The output tells you how many operations your PostgreSQL can handle per second and how long each takes—just like a coach’s scorecard shows which athletes ran fastest. Use it to spot bottlenecks, compare hardware or configuration changes, and keep your database in top shape.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
