import {PrismaClient} from "./generated/prisma";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
	switch (req.method) {
		case "GET": {
			const {user} = req.query;
			res.status(200).json({message: `Hello, ${user}`});
			break;
		}
		case "POST": {
			const data = req.body;
			await prisma.user.create({
				data,
			});
			res.status(201).json({received: data});
			console.log("===POST===");
			break;
		}
		// default: {
		// 	res.status(405).json({error: "Method not allowed"});
		// }
	}
}
