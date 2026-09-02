/**
 * Guards the scheduler's two claims that no screen would ever fail loudly on:
 * that a failed recall is COUNTED, and what counts as a card that keeps
 * slipping.
 *
 * A leech list is only as true as `lapses`. If a rating path stopped
 * incrementing it, Progress would simply show an empty band forever — the same
 * thing it shows when you are doing well.
 *
 *   node scripts/test-srs.mjs        # or: npm test
 */
import assert from "node:assert/strict";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const lib = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "lib", "srs.ts");
const { newCard, schedule, isLeech, LEECH_LAPSES, isDue, dayKey, dueForecast, FORECAST_DAYS } =
  await import(pathToFileURL(lib).href);

const tests = {
  test_three_failures_are_what_makes_a_leech() {
    let card = newCard();
    for (let i = 0; i < LEECH_LAPSES - 1; i++) {
      card = schedule(card, "again");
      assert.equal(isLeech(card), false, `${card.lapses} lapses must not be a leech yet`);
    }
    card = schedule(card, "again");
    assert.equal(card.lapses, LEECH_LAPSES);
    assert.equal(isLeech(card), true);
  },

  test_a_card_you_have_never_failed_is_never_a_leech() {
    let card = newCard();
    for (let i = 0; i < 6; i++) card = schedule(card, "good");
    assert.equal(card.lapses, 0);
    assert.equal(isLeech(card), false);
    assert.equal(isLeech(undefined), false, "an unstudied card has no lapses to read");
  },

  test_recovering_does_not_clear_the_history() {
    // Deliberate: a card that failed four times and then went right once is
    // still the card that failed four times. Zeroing on success would empty the
    // list exactly when a session made it look fine.
    let card = newCard();
    for (let i = 0; i < 4; i++) card = schedule(card, "again");
    card = schedule(card, "easy");
    assert.equal(card.lapses, 4);
    assert.equal(isLeech(card), true);
  },

  test_the_forecast_covers_a_fortnight_starting_today() {
    const f = dueForecast([], FORECAST_DAYS, "2026-09-02");
    assert.equal(f.length, FORECAST_DAYS);
    assert.equal(f[0].key, "2026-09-02");
    assert.equal(f[0].today, true);
    assert.equal(f[1].key, "2026-09-03");
    assert.equal(f[13].key, "2026-09-15");
    assert.equal(f[13].today, false);
  },

  test_overdue_lands_on_today_not_in_the_past() {
    // Work waiting now, not work that happened on some past day. A bar
    // backwards in time would say the opposite of what it means.
    const f = dueForecast(["2026-08-01", "2026-09-01", "2026-09-02"], FORECAST_DAYS, "2026-09-02");
    assert.equal(f[0].count, 3);
    assert.equal(
      f.slice(1).reduce((n, d) => n + d.count, 0),
      0,
    );
  },

  test_a_month_out_is_dropped_rather_than_piled_on_the_last_day() {
    const f = dueForecast(["2026-09-10", "2026-10-30", "2027-01-01"], FORECAST_DAYS, "2026-09-02");
    assert.equal(f[8].key, "2026-09-10");
    assert.equal(f[8].count, 1);
    assert.equal(f[13].count, 0, "the horizon must not become a bucket for everything beyond it");
    assert.equal(f.reduce((n, d) => n + d.count, 0), 1);
  },

  test_the_forecast_crosses_a_month_boundary_on_the_local_calendar() {
    const f = dueForecast(["2026-10-01"], FORECAST_DAYS, "2026-09-25");
    assert.equal(f[6].key, "2026-10-01");
    assert.equal(f[6].count, 1);
  },

  test_a_failure_still_resets_the_interval_to_one_day() {
    const card = schedule({ ...newCard(), interval: 30, reps: 5 }, "again");
    assert.equal(card.interval, 1);
    assert.equal(card.reps, 0);
    assert.equal(card.stage, "learning");
    assert.equal(isDue(card, dayKey(new Date(Date.now() + 86400000))), true);
  },
};

let passed = 0;
for (const [name, fn] of Object.entries(tests)) {
  try {
    fn();
    console.log(`ok   ${name}`);
    passed++;
  } catch (err) {
    console.log(`FAIL ${name}: ${err.message}`);
  }
}
const total = Object.keys(tests).length;
console.log(`\n${passed}/${total} pass`);
process.exit(passed === total ? 0 : 1);
