import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [
        PassportModule, JwtModule.register({
            secret:"", signOptions: {expiresIn: "1hr" }
        })
    ],
    providers: [JwtStrategy]
})

export class AuthModule {}