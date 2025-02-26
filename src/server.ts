import app from "./app";
import { connect_to_database } from "./database/database";

const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connect_to_database();
        app.listen(port, () => {
            console.log(`✅ Servidor rodando em http://localhost:${port}`);
        });
    } catch (error) {
        console.error("❌ Erro ao iniciar o servidor:", error);
        process.exit(1);
    }
};

startServer();
