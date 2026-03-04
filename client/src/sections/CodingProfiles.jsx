import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { useTheme } from "../context/ThemeContext";
import { FaExternalLinkAlt, FaCheckCircle, FaFire, FaTrophy, FaStar, FaRedo } from "react-icons/fa";

const LEETCODE_USERNAME = "pRaKaSh1782";

// Multiple APIs to try (fallbacks)
const APIS = [
  {
    name: "alfa-leetcode",
    profile: `https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`,
    solved: `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`,
    parse: (profileData, solvedData) => ({
      totalSolved: solvedData.solvedProblem || 0,
      easySolved: solvedData.easySolved || 0,
      mediumSolved: solvedData.mediumSolved || 0,
      hardSolved: solvedData.hardSolved || 0,
      totalEasy: solvedData.totalEasy || 830,
      totalMedium: solvedData.totalMedium || 1742,
      totalHard: solvedData.totalHard || 756,
      totalProblems: solvedData.totalProblems || 3328,
      ranking: profileData.ranking || 0,
      reputation: profileData.reputation || 0,
      contributionPoints: profileData.contributionPoints || 0,
    }),
  },
  {
    name: "leetcode-stats-api",
    profile: `https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`,
    solved: null,
    parse: (data) => ({
      totalSolved: data.totalSolved || 0,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
      totalEasy: data.totalEasy || 830,
      totalMedium: data.totalMedium || 1742,
      totalHard: data.totalHard || 756,
      totalProblems: data.totalQuestions || 3328,
      ranking: data.ranking || 0,
      reputation: data.reputation || 0,
      contributionPoints: data.contributionPoints || 0,
    }),
  },
  {
    name: "leetcode-api-faisalshehzad",
    profile: `https://leetcode-api-faisalshehzad.vercel.app/${LEETCODE_USERNAME}`,
    solved: null,
    parse: (data) => ({
      totalSolved: data.totalSolved || 0,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
      totalEasy: data.totalEasy || 830,
      totalMedium: data.totalMedium || 1742,
      totalHard: data.totalHard || 756,
      totalProblems: data.totalQuestions || 3328,
      ranking: data.ranking || 0,
      reputation: data.reputation || 0,
      contributionPoints: data.contributionPoints || 0,
    }),
  },
];

// Direct LeetCode GraphQL (most reliable — works always)
const fetchFromGraphQL = async () => {
  const query = {
    query: `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          profile {
            ranking
            reputation
          }
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          contributions {
            points
          }
        }
        allQuestionsCount {
          difficulty
          count
        }
      }
    `,
    variables: { username: LEETCODE_USERNAME },
  };

  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  });

  const data = await response.json();
  const user = data.data.matchedUser;
  const allQuestions = data.data.allQuestionsCount;
  const submissions = user.submitStatsGlobal.acSubmissionNum;

  const getCount = (arr, diff) => arr.find((a) => a.difficulty === diff)?.count || 0;

  return {
    totalSolved: getCount(submissions, "All"),
    easySolved: getCount(submissions, "Easy"),
    mediumSolved: getCount(submissions, "Medium"),
    hardSolved: getCount(submissions, "Hard"),
    totalEasy: getCount(allQuestions, "Easy"),
    totalMedium: getCount(allQuestions, "Medium"),
    totalHard: getCount(allQuestions, "Hard"),
    totalProblems: getCount(allQuestions, "All"),
    ranking: user.profile.ranking || 0,
    reputation: user.profile.reputation || 0,
    contributionPoints: user.contributions.points || 0,
  };
};

const CodingProfiles = () => {
  const { darkMode } = useTheme();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchStats = async () => {
    setLoading(true);
    setError(false);

    // Try GraphQL first (most reliable)
    try {
      console.log("🔄 Trying LeetCode GraphQL...");
      const data = await fetchFromGraphQL();
      if (data.totalSolved > 0) {
        console.log("✅ LeetCode GraphQL success!");
        setStats(data);
        setLoading(false);
        return;
      }
    } catch (err) {
      console.log("⚠️ GraphQL failed:", err.message);
    }

    // Try third-party APIs as fallback
    for (const api of APIS) {
      try {
        console.log(`🔄 Trying ${api.name}...`);

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000); // 8s timeout

        const profileRes = await fetch(api.profile, { signal: controller.signal });
        const profileData = await profileRes.json();
        clearTimeout(timeout);

        let solvedData = {};
        if (api.solved) {
          const controller2 = new AbortController();
          const timeout2 = setTimeout(() => controller2.abort(), 8000);
          const solvedRes = await fetch(api.solved, { signal: controller2.signal });
          solvedData = await solvedRes.json();
          clearTimeout(timeout2);
        }

        const parsed = api.solved
          ? api.parse(profileData, solvedData)
          : api.parse(profileData);

        if (parsed.totalSolved > 0) {
          console.log(`✅ ${api.name} success!`);
          setStats(parsed);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.log(`⚠️ ${api.name} failed:`, err.message);
        continue;
      }
    }

    // All APIs failed
    console.error("❌ All LeetCode APIs failed");
    setError(true);
    setLoading(false);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const getPercent = (solved, total) => {
    if (!total) return 0;
    return Math.round((solved / total) * 100);
  };

  return (
    <section id="coding" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionTitle
        title="LeetCode Profile"
        subtitle="My competitive programming & DSA journey"
      />

      {loading ? (
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          <p className={`text-sm ${darkMode ? "text-gray-500" : "text-slate-400"}`}>
            Fetching live stats from LeetCode...
          </p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <p className={`text-center ${darkMode ? "text-gray-500" : "text-slate-400"}`}>
            LeetCode API is temporarily unavailable.
          </p>
          <div className="flex gap-4">
            <button
              onClick={fetchStats}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                darkMode
                  ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/20"
                  : "bg-cyan-50 text-cyan-600 border border-cyan-200 hover:bg-cyan-100"
              }`}
            >
              <FaRedo /> Retry
            </button>
            <a
              href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105"
            >
              View on LeetCode <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>
      ) : stats ? (
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Top Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              {
                icon: <FaCheckCircle />,
                label: "Total Solved",
                value: stats.totalSolved,
                sub: `/ ${stats.totalProblems}`,
                color: "#00d4ff",
              },
              {
                icon: <FaTrophy />,
                label: "Ranking",
                value: stats.ranking?.toLocaleString(),
                sub: "Global",
                color: "#fbbf24",
              },
              {
                icon: <FaStar />,
                label: "Reputation",
                value: stats.reputation,
                sub: "Points",
                color: "#a78bfa",
              },
              {
                icon: <FaFire />,
                label: "Contributions",
                value: stats.contributionPoints,
                sub: "Points",
                color: "#f97316",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-5 text-center hover:border-cyan-400/30 transition-all"
              >
                <div
                  className="text-2xl mb-2 flex justify-center"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <p
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {item.value}
                </p>
                <p className={`text-xs ${darkMode ? "text-gray-500" : "text-slate-400"}`}>
                  {item.label}
                </p>
                <p className={`text-[10px] ${darkMode ? "text-gray-600" : "text-slate-400"}`}>
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Difficulty Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-lg font-semibold flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className={`w-6 h-6 object-contain ${darkMode ? "brightness-0 invert" : ""}`}
                />
                Problem Solving Progress
              </h3>
              <a
                href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 text-sm transition-colors ${
                  darkMode ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-600 hover:text-cyan-700"
                }`}
              >
                View Profile <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Circular Progress */}
              <div className="flex justify-center">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke={darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}
                      strokeWidth="10"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="#00d4ff"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${(stats.totalSolved / stats.totalProblems) * 327} 327`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p
                      className={`text-3xl font-bold ${
                        darkMode ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {stats.totalSolved}
                    </p>
                    <p className={`text-xs ${darkMode ? "text-gray-500" : "text-slate-400"}`}>
                      / {stats.totalProblems} Solved
                    </p>
                  </div>
                </div>
              </div>

              {/* Difficulty Progress Bars */}
              <div className="space-y-5">
                {[
                  { label: "Easy", solved: stats.easySolved, total: stats.totalEasy, color: "bg-green-500", dot: "bg-green-500" },
                  { label: "Medium", solved: stats.mediumSolved, total: stats.totalMedium, color: "bg-yellow-500", dot: "bg-yellow-500" },
                  { label: "Hard", solved: stats.hardSolved, total: stats.totalHard, color: "bg-red-500", dot: "bg-red-500" },
                ].map((item, i) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${item.dot}`} />
                        <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
                          {item.label}
                        </span>
                      </div>
                      <span className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-800"}`}>
                        {item.solved}
                        <span className={`font-normal ${darkMode ? "text-gray-500" : "text-slate-400"}`}>
                          {" "}/ {item.total}
                        </span>
                      </span>
                    </div>
                    <div className={`w-full h-2.5 rounded-full ${darkMode ? "bg-white/5" : "bg-slate-100"}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${getPercent(item.solved, item.total)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.2 }}
                        className={`h-full rounded-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Heatmap Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 overflow-hidden"
          >
            <h3
              className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              <FaFire className="text-orange-400" />
              Activity & Streak
            </h3>
            <div className="overflow-x-auto">
              <img
                src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=${
                  darkMode ? "dark" : "light"
                }&font=Inter&ext=heatmap&border=0`}
                alt="LeetCode Heatmap"
                className="w-full min-w-[600px] rounded-lg"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </motion.div>

          {/* Visit Profile Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="w-5 h-5 object-contain brightness-0 invert"
              />
              View Full LeetCode Profile
            </a>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
};

export default CodingProfiles;