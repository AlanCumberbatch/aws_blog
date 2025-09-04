import { Document } from '@/types/document'

// 多语言文档数据
export const documents: Document[] = [
  {
    id: 'aws-ec2-fundamentals',
    author: 'Technical Writer',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
    tags: ['AWS', 'EC2', 'Cloud Computing', 'Infrastructure'],
    category: 'Cloud Services',
    content: {
      en: {
        title: 'AWS EC2 Fundamentals',
        description: 'A comprehensive guide to Amazon Elastic Compute Cloud (EC2) service, covering instances, security groups, and best practices.',
        content: `# AWS EC2 Fundamentals

Amazon Elastic Compute Cloud (EC2) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

## What is EC2?

EC2 provides virtual computing environments, known as instances, that you can use to run applications. These instances can be easily scaled up or down based on your needs.

## Key Features

- **Scalability**: Easily scale your compute capacity up or down
- **Flexibility**: Choose from various instance types and operating systems
- **Security**: Built-in security features and network isolation
- **Cost-effective**: Pay only for what you use

## Instance Types

### General Purpose
- **t3.micro**: 1 vCPU, 1 GB RAM
- **t3.small**: 2 vCPU, 2 GB RAM
- **m5.large**: 2 vCPU, 8 GB RAM

### Compute Optimized
- **c5.large**: 2 vCPU, 4 GB RAM
- **c5.xlarge**: 4 vCPU, 8 GB RAM

### Memory Optimized
- **r5.large**: 2 vCPU, 16 GB RAM
- **r5.xlarge**: 4 vCPU, 32 GB RAM

## Security Groups

Security groups act as virtual firewalls for your instances. They control inbound and outbound traffic.

### Best Practices
1. **Principle of least privilege**: Only allow necessary ports
2. **Regular auditing**: Review and update security group rules
3. **Use specific IP ranges**: Avoid using 0.0.0.0/0 when possible

## Getting Started

1. Launch an EC2 instance
2. Configure security groups
3. Connect to your instance
4. Install and configure your applications

## Cost Optimization

- Use Spot Instances for fault-tolerant workloads
- Implement auto-scaling for dynamic workloads
- Monitor usage with CloudWatch
- Regular audit of access logs`
      },
      ja: {
        title: 'AWS EC2 の基礎',
        description: 'Amazon Elastic Compute Cloud (EC2) サービスの包括的なガイド。インスタンス、セキュリティグループ、ベストプラクティスをカバーします。',
        content: `# AWS EC2 の基礎

Amazon Elastic Compute Cloud (EC2) は、クラウドでリサイズ可能なコンピューティング容量を提供するウェブサービスです。開発者にとってウェブスケールのクラウドコンピューティングを簡単にするように設計されています。

## EC2 とは？

EC2 は、アプリケーションを実行するために使用できる仮想コンピューティング環境（インスタンス）を提供します。これらのインスタンスは、ニーズに応じて簡単にスケールアップまたはスケールダウンできます。

## 主な機能

- **スケーラビリティ**: コンピューティング容量を簡単にスケールアップまたはスケールダウン
- **柔軟性**: 様々なインスタンスタイプとオペレーティングシステムから選択
- **セキュリティ**: 組み込みのセキュリティ機能とネットワーク分離
- **コスト効率**: 使用した分だけ支払い

## インスタンスタイプ

### 汎用
- **t3.micro**: 1 vCPU、1 GB RAM
- **t3.small**: 2 vCPU、2 GB RAM
- **m5.large**: 2 vCPU、8 GB RAM

### コンピューティング最適化
- **c5.large**: 2 vCPU、4 GB RAM
- **c5.xlarge**: 4 vCPU、8 GB RAM

### メモリ最適化
- **r5.large**: 2 vCPU、16 GB RAM
- **r5.xlarge**: 4 vCPU、32 GB RAM

## セキュリティグループ

セキュリティグループは、インスタンスの仮想ファイアウォールとして機能します。インバウンドとアウトバウンドのトラフィックを制御します。

### ベストプラクティス
1. **最小権限の原則**: 必要なポートのみを許可
2. **定期的な監査**: セキュリティグループルールの確認と更新
3. **特定のIP範囲を使用**: 可能な限り0.0.0.0/0の使用を避ける

## 始め方

1. EC2インスタンスを起動
2. セキュリティグループを設定
3. インスタンスに接続
4. アプリケーションをインストールして設定

## コスト最適化

- フォルトトレラントなワークロードにはスポットインスタンスを使用
- 動的ワークロードにはオートスケーリングを実装
- CloudWatchで使用状況を監視
- アクセスログの定期的な監査`
      },
      zh: {
        title: 'AWS EC2 基础',
        description: 'Amazon Elastic Compute Cloud (EC2) 服务的综合指南，涵盖实例、安全组和最佳实践。',
        content: `# AWS EC2 基础

Amazon Elastic Compute Cloud (EC2) 是一个提供可调整计算容量的云服务。它旨在让开发者更容易进行大规模云计算。

## 什么是 EC2？

EC2 提供虚拟计算环境（称为实例），您可以用它们来运行应用程序。这些实例可以根据您的需求轻松扩展或缩减。

## 主要特性

- **可扩展性**: 轻松扩展或缩减计算容量
- **灵活性**: 从各种实例类型和操作系统中选择
- **安全性**: 内置安全功能和网络隔离
- **成本效益**: 只为使用的内容付费

## 实例类型

### 通用型
- **t3.micro**: 1 vCPU、1 GB RAM
- **t3.small**: 2 vCPU、2 GB RAM
- **m5.large**: 2 vCPU、8 GB RAM

### 计算优化型
- **c5.large**: 2 vCPU、4 GB RAM
- **c5.xlarge**: 4 vCPU、8 GB RAM

### 内存优化型
- **r5.large**: 2 vCPU、16 GB RAM
- **r5.xlarge**: 4 vCPU、32 GB RAM

## 安全组

安全组充当实例的虚拟防火墙。它们控制入站和出站流量。

### 最佳实践
1. **最小权限原则**: 只允许必要的端口
2. **定期审计**: 审查和更新安全组规则
3. **使用特定IP范围**: 尽可能避免使用0.0.0.0/0

## 入门指南

1. 启动EC2实例
2. 配置安全组
3. 连接到您的实例
4. 安装和配置您的应用程序

## 成本优化

- 对容错工作负载使用Spot实例
- 为动态工作负载实施自动扩展
- 使用CloudWatch监控使用情况
- 定期审计访问日志`
      }
    }
  },
  {
    id: 'aws-s3-storage-guide',
    author: 'Technical Writer',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18',
    tags: ['AWS', 'S3', 'Storage', 'Cloud'],
    category: 'Storage',
    content: {
      en: {
        title: 'AWS S3 Storage Guide',
        description: 'Complete guide to Amazon Simple Storage Service (S3), including buckets, objects, and storage classes.',
        content: `# AWS S3 Storage Guide

Amazon Simple Storage Service (S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.

## What is S3?

S3 is designed to store and retrieve any amount of data from anywhere on the web. It's built to deliver 99.999999999% (11 9's) of durability.

## Key Features

- **Durability**: 99.999999999% (11 9's) of durability
- **Availability**: 99.99% availability over a given year
- **Scalability**: Virtually unlimited storage capacity
- **Security**: Multiple layers of security and access controls

## Storage Classes

### Standard
- **Use case**: Frequently accessed data
- **Availability**: 99.99%
- **Durability**: 99.999999999%

### Standard-IA (Infrequent Access)
- **Use case**: Long-term storage, infrequent access
- **Availability**: 99.9%
- **Durability**: 99.999999999%

### Glacier
- **Use case**: Long-term archival
- **Availability**: 99.99% (after restore)
- **Durability**: 99.999999999%

## Bucket Configuration

### Naming Rules
- Bucket names must be globally unique
- 3-63 characters long
- Can contain lowercase letters, numbers, dots, and hyphens

### Best Practices
1. **Use meaningful names**: Include project or environment
2. **Enable versioning**: Protect against accidental deletion
3. **Configure lifecycle policies**: Automate storage class transitions
4. **Enable server-side encryption**: Protect data at rest

## Security

### Access Control
- **IAM policies**: Control user and role access
- **Bucket policies**: Control bucket-level access
- **ACLs**: Control object-level access

### Encryption
- **Server-side encryption**: S3-managed keys (SSE-S3)
- **Customer-provided keys**: SSE-C
- **AWS KMS**: SSE-KMS

## Cost Optimization

- Use appropriate storage classes
- Implement lifecycle policies
- Monitor usage with CloudWatch
- Regular audit of access patterns`
      },
      ja: {
        title: 'AWS S3 ストレージガイド',
        description: 'Amazon Simple Storage Service (S3) の完全ガイド。バケット、オブジェクト、ストレージクラスを含みます。',
        content: `# AWS S3 ストレージガイド

Amazon Simple Storage Service (S3) は、業界最高レベルのスケーラビリティ、データ可用性、セキュリティ、パフォーマンスを提供するオブジェクトストレージサービスです。

## S3 とは？

S3 は、ウェブ上のどこからでも任意の量のデータを保存および取得するように設計されています。99.999999999%（11個の9）の耐久性を提供するように構築されています。

## 主な機能

- **耐久性**: 99.999999999%（11個の9）の耐久性
- **可用性**: 年間99.99%の可用性
- **スケーラビリティ**: 実質的に無制限のストレージ容量
- **セキュリティ**: 複数のセキュリティ層とアクセス制御

## ストレージクラス

### Standard
- **用途**: 頻繁にアクセスされるデータ
- **可用性**: 99.99%
- **耐久性**: 99.999999999%

### Standard-IA（低頻度アクセス）
- **用途**: 長期ストレージ、低頻度アクセス
- **可用性**: 99.9%
- **耐久性**: 99.999999999%

### Glacier
- **用途**: 長期アーカイブ
- **可用性**: 99.99%（復元後）
- **耐久性**: 99.999999999%

## バケット設定

### 命名規則
- バケット名はグローバルに一意である必要があります
- 3-63文字の長さ
- 小文字、数字、ドット、ハイフンを含むことができます

### ベストプラクティス
1. **意味のある名前を使用**: プロジェクトや環境を含める
2. **バージョニングを有効化**: 誤削除から保護
3. **ライフサイクルポリシーを設定**: ストレージクラス遷移を自動化
4. **サーバーサイド暗号化を有効化**: 保存データを保護

## セキュリティ

### アクセス制御
- **IAMポリシー**: ユーザーとロールのアクセスを制御
- **バケットポリシー**: バケットレベルのアクセスを制御
- **ACL**: オブジェクトレベルのアクセスを制御

### 暗号化
- **サーバーサイド暗号化**: S3管理キー（SSE-S3）
- **顧客提供キー**: SSE-C
- **AWS KMS**: SSE-KMS

## コスト最適化

- 適切なストレージクラスを使用
- ライフサイクルポリシーを実装
- CloudWatchで使用状況を監視
- アクセスパターンの定期的な監査`
      },
      zh: {
        title: 'AWS S3 存储指南',
        description: 'Amazon Simple Storage Service (S3) 的完整指南，包括存储桶、对象和存储类别。',
        content: `# AWS S3 存储指南

Amazon Simple Storage Service (S3) 是一个对象存储服务，提供行业领先的可扩展性、数据可用性、安全性和性能。

## 什么是 S3？

S3 旨在从网络上的任何地方存储和检索任意数量的数据。它构建为提供99.999999999%（11个9）的持久性。

## 主要特性

- **持久性**: 99.999999999%（11个9）的持久性
- **可用性**: 年度99.99%的可用性
- **可扩展性**: 几乎无限的存储容量
- **安全性**: 多层安全性和访问控制

## 存储类别

### 标准
- **用途**: 频繁访问的数据
- **可用性**: 99.99%
- **持久性**: 99.999999999%

### 标准-IA（不频繁访问）
- **用途**: 长期存储，不频繁访问
- **可用性**: 99.9%
- **持久性**: 99.999999999%

### Glacier
- **用途**: 长期归档
- **可用性**: 99.99%（恢复后）
- **持久性**: 99.999999999%

## 存储桶配置

### 命名规则
- 存储桶名称必须全局唯一
- 3-63个字符长度
- 可以包含小写字母、数字、点和连字符

### 最佳实践
1. **使用有意义的名称**: 包含项目或环境
2. **启用版本控制**: 防止意外删除
3. **配置生命周期策略**: 自动化存储类别转换
4. **启用服务器端加密**: 保护静态数据

## 安全性

### 访问控制
- **IAM策略**: 控制用户和角色访问
- **存储桶策略**: 控制存储桶级访问
- **ACL**: 控制对象级访问

### 加密
- **服务器端加密**: S3管理密钥（SSE-S3）
- **客户提供密钥**: SSE-C
- **AWS KMS**: SSE-KMS

## 成本优化

- 使用适当的存储类别
- 实施生命周期策略
- 使用CloudWatch监控使用情况
- 定期审计访问模式`
      }
    }
  },
  {
    id: 'aws-lambda-serverless',
    author: 'Technical Writer',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-12',
    tags: ['AWS', 'Lambda', 'Serverless', 'Functions'],
    category: 'Compute',
    content: {
      en: {
        title: 'AWS Lambda Serverless Computing',
        description: 'Introduction to AWS Lambda for serverless computing, including functions, triggers, and best practices.',
        content: `# AWS Lambda Serverless Computing

AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources.

## What is Lambda?

Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.

## Key Benefits

- **No server management**: AWS manages the infrastructure
- **Automatic scaling**: Scales automatically with your application
- **Pay per use**: Only pay for the compute time you consume
- **Event-driven**: Responds to events from various AWS services

## Supported Languages

- Node.js
- Python
- Java
- C#
- Go
- Ruby
- PowerShell

## Function Configuration

### Memory and Timeout
- **Memory**: 128 MB to 10,240 MB
- **Timeout**: 1 second to 15 minutes
- **Environment variables**: Store configuration data

### Best Practices
1. **Keep functions small**: Single responsibility principle
2. **Use environment variables**: For configuration
3. **Handle errors gracefully**: Implement proper error handling
4. **Monitor performance**: Use CloudWatch metrics

## Triggers

### Common Triggers
- **API Gateway**: HTTP requests
- **S3**: Object creation/deletion
- **DynamoDB**: Table changes
- **CloudWatch Events**: Scheduled events
- **SNS**: Notifications

## Cold Start Optimization

### Strategies
1. **Keep functions warm**: Use scheduled events
2. **Optimize package size**: Remove unused dependencies
3. **Use provisioned concurrency**: For predictable workloads
4. **Choose appropriate runtime**: Match your use case

## Monitoring and Debugging

### CloudWatch Integration
- **Logs**: Automatic logging to CloudWatch Logs
- **Metrics**: Duration, errors, invocations
- **Alarms**: Set up alerts for errors or performance issues

### X-Ray Tracing
- **Distributed tracing**: Track requests across services
- **Performance analysis**: Identify bottlenecks
- **Error debugging**: Detailed error information

## Cost Optimization

- Optimize function duration
- Use appropriate memory allocation
- Implement efficient error handling
- Monitor and analyze usage patterns`
      },
      ja: {
        title: 'AWS Lambda サーバーレスコンピューティング',
        description: 'サーバーレスコンピューティングのためのAWS Lambdaの紹介。関数、トリガー、ベストプラクティスを含みます。',
        content: `# AWS Lambda サーバーレスコンピューティング

AWS Lambdaは、イベントに応答してコードを実行し、基盤となるコンピューティングリソースを自動的に管理するサーバーレスコンピューティングサービスです。

## Lambda とは？

Lambdaを使用すると、サーバーをプロビジョニングまたは管理することなくコードを実行できます。消費したコンピューティング時間に対してのみ支払います。

## 主な利点

- **サーバー管理不要**: AWSがインフラストラクチャを管理
- **自動スケーリング**: アプリケーションと共に自動的にスケール
- **使用量課金**: 消費したコンピューティング時間に対してのみ支払い
- **イベント駆動**: 様々なAWSサービスのイベントに応答

## サポート言語

- Node.js
- Python
- Java
- C#
- Go
- Ruby
- PowerShell

## 関数設定

### メモリとタイムアウト
- **メモリ**: 128 MB から 10,240 MB
- **タイムアウト**: 1秒から15分
- **環境変数**: 設定データを保存

### ベストプラクティス
1. **関数を小さく保つ**: 単一責任の原則
2. **環境変数を使用**: 設定用
3. **エラーを適切に処理**: 適切なエラーハンドリングを実装
4. **パフォーマンスを監視**: CloudWatchメトリクスを使用

## トリガー

### 一般的なトリガー
- **API Gateway**: HTTPリクエスト
- **S3**: オブジェクトの作成/削除
- **DynamoDB**: テーブルの変更
- **CloudWatch Events**: スケジュールされたイベント
- **SNS**: 通知

## コールドスタート最適化

### 戦略
1. **関数を温かく保つ**: スケジュールされたイベントを使用
2. **パッケージサイズを最適化**: 未使用の依存関係を削除
3. **プロビジョニングされた同時実行を使用**: 予測可能なワークロード用
4. **適切なランタイムを選択**: ユースケースに合わせる

## 監視とデバッグ

### CloudWatch統合
- **ログ**: CloudWatch Logsへの自動ログ記録
- **メトリクス**: 継続時間、エラー、呼び出し
- **アラーム**: エラーやパフォーマンス問題のアラートを設定

### X-Rayトレーシング
- **分散トレーシング**: サービス間のリクエストを追跡
- **パフォーマンス分析**: ボトルネックを特定
- **エラーデバッグ**: 詳細なエラー情報

## コスト最適化

- 関数の継続時間を最適化
- 適切なメモリ割り当てを使用
- 効率的なエラーハンドリングを実装
- 使用パターンを監視・分析`
      },
      zh: {
        title: 'AWS Lambda 无服务器计算',
        description: 'AWS Lambda 无服务器计算介绍，包括函数、触发器和最佳实践。',
        content: `# AWS Lambda 无服务器计算

AWS Lambda 是一个无服务器计算服务，它响应事件运行您的代码，并自动管理底层计算资源。

## 什么是 Lambda？

Lambda 让您无需预置或管理服务器即可运行代码。您只需为消耗的计算时间付费。

## 主要优势

- **无需服务器管理**: AWS 管理基础设施
- **自动扩展**: 随应用程序自动扩展
- **按使用付费**: 只为消耗的计算时间付费
- **事件驱动**: 响应各种 AWS 服务的事件

## 支持的语言

- Node.js
- Python
- Java
- C#
- Go
- Ruby
- PowerShell

## 函数配置

### 内存和超时
- **内存**: 128 MB 到 10,240 MB
- **超时**: 1秒到15分钟
- **环境变量**: 存储配置数据

### 最佳实践
1. **保持函数小巧**: 单一职责原则
2. **使用环境变量**: 用于配置
3. **优雅处理错误**: 实现适当的错误处理
4. **监控性能**: 使用 CloudWatch 指标

## 触发器

### 常见触发器
- **API Gateway**: HTTP 请求
- **S3**: 对象创建/删除
- **DynamoDB**: 表更改
- **CloudWatch Events**: 计划事件
- **SNS**: 通知

## 冷启动优化

### 策略
1. **保持函数温暖**: 使用计划事件
2. **优化包大小**: 删除未使用的依赖项
3. **使用预置并发**: 用于可预测的工作负载
4. **选择适当的运行时**: 匹配您的用例

## 监控和调试

### CloudWatch 集成
- **日志**: 自动记录到 CloudWatch Logs
- **指标**: 持续时间、错误、调用
- **警报**: 为错误或性能问题设置警报

### X-Ray 跟踪
- **分布式跟踪**: 跨服务跟踪请求
- **性能分析**: 识别瓶颈
- **错误调试**: 详细的错误信息

## 成本优化

- 优化函数持续时间
- 使用适当的内存分配
- 实现高效的错误处理
- 监控和分析使用模式`
      }
    }
  }
]

// 扁平化的文档类型，用于组件显示
export interface FlatDocument {
  id: string
  title: string
  description: string
  content: string
  author: string
  createdAt: string
  updatedAt: string
  tags: string[]
  category: string
}

// 根据语言获取文档列表
export function getAllDocuments(locale: string = 'en'): FlatDocument[] {
  return documents.map(doc => ({
    id: doc.id,
    title: doc.content[locale as keyof typeof doc.content]?.title || doc.content.en.title,
    description: doc.content[locale as keyof typeof doc.content]?.description || doc.content.en.description,
    content: doc.content[locale as keyof typeof doc.content]?.content || doc.content.en.content,
    author: doc.author,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    tags: doc.tags,
    category: doc.category
  }))
}

// 根据ID和语言获取单个文档
export function getDocumentById(id: string, locale: string = 'en'): FlatDocument | null {
  const doc = documents.find(d => d.id === id)
  if (!doc) return null

  return {
    id: doc.id,
    title: doc.content[locale as keyof typeof doc.content]?.title || doc.content.en.title,
    description: doc.content[locale as keyof typeof doc.content]?.description || doc.content.en.description,
    content: doc.content[locale as keyof typeof doc.content]?.content || doc.content.en.content,
    author: doc.author,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    tags: doc.tags,
    category: doc.category
  }
}