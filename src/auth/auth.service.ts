import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) {
  }

  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByUsername(name);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
