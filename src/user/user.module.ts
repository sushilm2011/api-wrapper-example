import { Module, Inject } from '@nestjs/common';
import { ApiWrapperModule } from 'src/api-wrapper/api-wrapper.module';

@Module({
  imports: [
    ApiWrapperModule.forFeature({
      endpoint: '/users',
    }),
  ],
})
export class UserModule {
  constructor(@Inject('API_ENDPOINT') private apiUrl: string) {
    console.log(`Users API URL: ${this.apiUrl}`);
  }
}