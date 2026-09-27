import { NextResponse } from 'next/server';

const permissions = [
  // Users Module
  { id: 1, name: 'view_users', module: 'Users', description: 'Can view users list' },
  { id: 2, name: 'create_users', module: 'Users', description: 'Can create new users' },
  { id: 3, name: 'edit_users', module: 'Users', description: 'Can edit user details' },
  { id: 4, name: 'delete_users', module: 'Users', description: 'Can delete users' },
  
  // Transactions Module
  { id: 5, name: 'view_transactions', module: 'Transactions', description: 'Can view transactions' },
  { id: 6, name: 'create_transactions', module: 'Transactions', description: 'Can create transactions' },
  { id: 7, name: 'edit_transactions', module: 'Transactions', description: 'Can edit transactions' },
  { id: 8, name: 'delete_transactions', module: 'Transactions', description: 'Can delete transactions' },
  
  // Vouchers Module
  { id: 9, name: 'view_vouchers', module: 'Vouchers', description: 'Can view vouchers' },
  { id: 10, name: 'create_vouchers', module: 'Vouchers', description: 'Can create vouchers' },
  { id: 11, name: 'edit_vouchers', module: 'Vouchers', description: 'Can edit vouchers' },
  { id: 12, name: 'delete_vouchers', module: 'Vouchers', description: 'Can delete vouchers' },
  
  // Images Module
  { id: 13, name: 'view_images', module: 'Images', description: 'Can view images' },
  { id: 14, name: 'upload_images', module: 'Images', description: 'Can upload images' },
  { id: 15, name: 'delete_images', module: 'Images', description: 'Can delete images' },
  
  // Support Module
  { id: 16, name: 'view_support', module: 'Support', description: 'Can view support tickets' },
  { id: 17, name: 'reply_support', module: 'Support', description: 'Can reply to support tickets' },
  
  // Affiliates Module
  { id: 18, name: 'view_affiliates', module: 'Affiliates', description: 'Can view affiliates' },
  { id: 19, name: 'edit_affiliates', module: 'Affiliates', description: 'Can edit affiliates' },
  
  // Commissions Module
  { id: 20, name: 'view_commissions', module: 'Commissions', description: 'Can view commissions' },
  { id: 21, name: 'process_commissions', module: 'Commissions', description: 'Can process commissions' },
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: permissions,
    });
  } catch (error) {
    console.error("Error fetching permissions:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}