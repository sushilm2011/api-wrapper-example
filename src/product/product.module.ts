import { Module, Inject } from '@nestjs/common';
import { ApiWrapperModule } from 'src/api-wrapper/api-wrapper.module';

@Module({
  imports: [
    ApiWrapperModule.forFeature({
      endpoint: '/products',
    }),
  ],
})
export class ProductModule {
  constructor(@Inject('API_ENDPOINT') private apiUrl: string) {
    console.log(`Products API URL: ${this.apiUrl}`);
  }
}