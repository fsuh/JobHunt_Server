"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// db and authenticateUser
const connect_1 = __importDefault(require("./db/connect"));
// routers
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const jobsRoutes_1 = __importDefault(require("./routes/jobsRoutes"));
// middleware
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const not_found_1 = __importDefault(require("./middleware/not-found"));
const PORT = process.env.PORT || 5006;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api/v1/auth", authRoutes_1.default);
app.use("/api/v1/jobs", jobsRoutes_1.default);
app.use(not_found_1.default);
app.use(error_handler_1.default);
// app.listen(PORT, () =>
//   console.log(`server listening on http://localhost:${PORT}`)
// );
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.default)(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
start();
