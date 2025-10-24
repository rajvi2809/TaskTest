const pool = require("../config/database");

async function updateOrdersTable() {
  try {
    console.log("Updating orders table with shipping information...");

    
    const alterQueries = [
      `ALTER TABLE orders ADD COLUMN IF NOT EXISTS shipping_address JSONB`,
      `ALTER TABLE orders ADD COLUMN IF NOT EXISTS subtotal DECIMAL(10, 2)`,
      `ALTER TABLE orders ADD COLUMN IF NOT EXISTS tax DECIMAL(10, 2)`,
      `ALTER TABLE orders ADD COLUMN IF NOT EXISTS shipping DECIMAL(10, 2)`,
    ];

    for (const query of alterQueries) {
      await pool.query(query);
      console.log(`Executed: ${query}`);
    }

    console.log("Orders table updated successfully!");
  } catch (error) {
    console.error("Error updating orders table:", error);
    throw error;
  }
}


if (require.main === module) {
  updateOrdersTable()
    .then(() => {
      console.log("Orders table update completed!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Failed to update orders table:", error);
      process.exit(1);
    });
}

module.exports = updateOrdersTable;
