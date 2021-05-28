import { Exception } from "@adonisjs/core/build/standalone";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class InternalServerErrorException extends Exception {
  public async handle(error: this, ctx: HttpContextContract) {
    ctx.response.status(500).send({ error: error.message, statusCode: 500 });
  }
}
