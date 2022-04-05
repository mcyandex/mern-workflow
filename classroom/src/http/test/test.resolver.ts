import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorizationGuard } from '../auth/authorization.guard';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) { }

  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return "Hello World!";
  }
}
