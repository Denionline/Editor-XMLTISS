import {PrismaClient} from "./generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
	switch (req.method) {
		case "GET": {
			const {user} = req.query;
			res.status(200).json({message: `Hello, ${user}`});
			break;
		}
		case "POST": {
			const {name, email, password} = req.body;
			const hashPwd = await bcrypt.hash(password, 10);
			await prisma.user.create({
				data: {
					name,
					email,
					hashPwd,
				},
			});
			res.status(201).json({received: "OK"});
			break;
		}
	}
}
