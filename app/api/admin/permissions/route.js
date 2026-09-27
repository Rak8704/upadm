import { NextResponse } from 'next/server';

// Permissions data
const permissions = [
  // Dashboard
  { id: 1, name: 'view_dashboard', module: 'Dashboard', description: 'View dashboard' },
  
  // Users Module
  { id: 2, name: 'view_users', module: 'Users', description: 'View users list' },
  { id: 3, name: 'create_users', module: 'Users', description: 'Create new users' },
  { id: 4, name: 'edit_users', module: 'Users', description: 'Edit user details' },
  { id: 5, name: 'delete_users', module: 'Users', description: 'Delete users' },
  { id: 6, name: 'suspend_users', module: 'Users', description: 'Suspend/Activate users' },
  
  // Transactions Module
  { id: 7, name: 'view_transactions', module: 'Transactions', description: 'View transactions' },
  { id: 8, name: 'create_transactions', module: 'Transactions', description: 'Create transactions' },
  { id: 9, name: 'edit_transactions', module: 'Transactions', description: 'Edit transactions' },
  { id: 10, name: 'delete_transactions', module: 'Transactions', description: 'Delete transactions' },
  
  // Vouchers Module
  { id: 11, name: 'view_vouchers', module: 'Vouchers', description: 'View vouchers' },
  { id: 12, name: 'create_vouchers', module: 'Vouchers', description: 'Create vouchers' },
  { id: 13, name: 'edit_vouchers', module: 'Vouchers', description: 'Edit vouchers' },
  { id: 14, name: 'delete_vouchers', module: 'Vouchers', description: 'Delete vouchers' },
  
  // Images Module
  { id: 15, name: 'view_images', module: 'Images', description: 'View images' },
  { id: 16, name: 'upload_images', module: 'Images', description: 'Upload images' },
  { id: 17, name: 'delete_images', module: 'Images', description: 'Delete images' },
  
  // Support Module
  { id: 18, name: 'view_support', module: 'Support', description: 'View support tickets' },
  { id: 19, name: 'reply_support', module: 'Support', description: 'Reply to support tickets' },
  { id: 20, name: 'resolve_support', module: 'Support', description: 'Resolve support tickets' },
  
  // Affiliates Module
  { id: 21, name: 'view_affiliates', module: 'Affiliates', description: 'View affiliates' },
  { id: 22, name: 'create_affiliates', module: 'Affiliates', description: 'Create affiliates' },
  { id: 23, name: 'edit_affiliates', module: 'Affiliates', description: 'Edit affiliates' },
  { id: 24, name: 'delete_affiliates', module: 'Affiliates', description: 'Delete affiliates' },
  
  // Commissions Module
  { id: 25, name: 'view_commissions', module: 'Commissions', description: 'View commissions' },
  { id: 26, name: 'process_commissions', module: 'Commissions', description: 'Process commissions' },
  { id: 27, name: 'edit_commissions', module: 'Commissions', description: 'Edit commissions' },
  
  // Reports Module
  { id: 28, name: 'view_reports', module: 'Reports', description: 'View reports' },
  { id: 29, name: 'export_reports', module: 'Reports', description: 'Export reports' },
  
  // Settings Module
  { id: 30, name: 'view_settings', module: 'Settings', description: 'View settings' },
  { id: 31, name: 'edit_settings', module: 'Settings', description: 'Edit settings' },
  
  // Sub Admins Module
  { id: 32, name: 'view_subadmins', module: 'Sub Admins', description: 'View sub admins' },
  { id: 33, name: 'create_subadmins', module: 'Sub Admins', description: 'Create sub admins' },
  { id: 34, name: 'edit_subadmins', module: 'Sub Admins', description: 'Edit sub admins' },
  { id: 35, name: 'delete_subadmins', module: 'Sub Admins', description: 'Delete sub admins' },
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: permissions,
      total: permissions.length,
    });
  } catch (error) {
    console.error("Error fetching permissions:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Internal server error",
        data: [] 
      },
      { status: 500 }
    );
  }
}

// Optional: POST method for creating new permissions
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, module, description } = body;
    
    // Validate input
    if (!name || !module) {
      return NextResponse.json(
        { success: false, message: "Name and module are required" },
        { status: 400 }
      );
    }
    
    // Create new permission
    const newPermission = {
      id: permissions.length + 1,
      name,
      module,
      description: description || '',
    };
    
    permissions.push(newPermission);
    
    return NextResponse.json({
      success: true,
      message: "Permission created successfully",
      data: newPermission,
    });
  } catch (error) {
    console.error("Error creating permission:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}