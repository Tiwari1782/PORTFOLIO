const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");

dotenv.config();

const resetAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Delete all existing admins
    await Admin.deleteMany({});
    console.log("🗑️  All old admin accounts deleted");

    // Create fresh admin
    const admin = await Admin.create({
      username: "Prakash",
      password: "Prakash@2005",
    });

    console.log("✅ New admin created:");
    console.log(`   Username: Prakash`);
    console.log(`   Password: Prakash@2005`);
    console.log("\n🎉 You can now login at /admin");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

resetAdmin();