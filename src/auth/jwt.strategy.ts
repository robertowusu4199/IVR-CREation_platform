import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy} from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false, 
            secretOrKey: "secret_code_key"
        });
    }

    async validate(playload: any) {
        return { userId: playload.sub, 
            email: playload.email
        };
    }
}