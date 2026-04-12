import { Injectable } from '@nestjs/common';
import { UserReposityory } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserReposityory)
    private userRepository: UserReposityory,
  ) {}

  async signup(authCredentialsDto: AuthCredentialsDto) {
    return this.userRepository.createUser(authCredentialsDto);
  }
}
