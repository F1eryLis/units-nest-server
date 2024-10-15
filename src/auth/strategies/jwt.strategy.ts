import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { COOKIE_NAMES } from "../constants/auth.constants";

import { StrategiesEnum } from "../constants/strategies.constants";
import { UserFromJwt } from "src/interfaces/auth.interface";

export class JwtStrategy extends PassportStrategy(
    Strategy,
    StrategiesEnum.JWT,
) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req) => req?.cookies?.[COOKIE_NAMES.JWT] || null,
            ]),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        });
    }

    async validate(
        payload: UserFromJwt
    ) {
        return payload;
    }
}