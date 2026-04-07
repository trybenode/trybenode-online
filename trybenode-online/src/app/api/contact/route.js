import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to TrybeNode
    const { data, error } = await resend.emails.send({
      from: 'TrybeNode Website <contact@trybenode.space>',
      to: [process.env.TRYBENODE_EMAIL || 'contact@trybenode.space'],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <!-- Header with Logo -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #2d236d 0%, #725eed 100%); padding: 50px 40px; text-align: center; position: relative;">
                        <img src="https://trybenode.online/logo.png" alt="TrybeNode" style="height: 50px; width: auto; margin-bottom: 20px; display: inline-block;" />
                        <h1 style="margin: 0; color: #fbeb78; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">New Contact Submission</h1>
                        <div style="margin-top: 15px; padding: 8px 20px; background-color: rgba(251, 235, 120, 0.15); border-radius: 20px; display: inline-block;">
                          <p style="margin: 0; color: #fbeb78; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Website Contact Form</p>
                        </div>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 50px 40px;">
                        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); padding: 20px; border-radius: 8px; margin-bottom: 35px; border-left: 4px solid #fbeb78;">
                          <p style="margin: 0; color: #555; font-size: 16px; line-height: 1.7;">
                            🎉 <strong style="color: #2d236d;">Great news!</strong> You have received a new contact form submission from your website.
                          </p>
                        </div>
                        
                        <!-- Contact Details -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                          <tr>
                            <td style="padding: 18px 20px; background: linear-gradient(135deg, #f8f9fa 0%, #fafbfc 100%); border-left: 4px solid #725eed; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
                              <p style="margin: 0 0 6px; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">👤 Full Name</p>
                              <p style="margin: 0; color: #2d236d; font-size: 18px; font-weight: 700;">${name}</p>
                            </td>
                          </tr>
                        </table>
                        
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                          <tr>
                            <td style="padding: 18px 20px; background: linear-gradient(135deg, #f8f9fa 0%, #fafbfc 100%); border-left: 4px solid #725eed; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
                              <p style="margin: 0 0 6px; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">📧 Email Address</p>
                              <p style="margin: 0;">
                                <a href="mailto:${email}" style="color: #725eed; font-size: 17px; font-weight: 600; text-decoration: none;">${email}</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                        
                        ${phone ? `
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                          <tr>
                            <td style="padding: 18px 20px; background: linear-gradient(135deg, #f8f9fa 0%, #fafbfc 100%); border-left: 4px solid #725eed; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
                              <p style="margin: 0 0 6px; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">📱 Phone Number</p>
                              <p style="margin: 0;">
                                <a href="tel:${phone}" style="color: #725eed; font-size: 17px; font-weight: 600; text-decoration: none;">${phone}</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                        ` : ''}
                        
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                          <tr>
                            <td style="padding: 18px 20px; background: linear-gradient(135deg, #f8f9fa 0%, #fafbfc 100%); border-left: 4px solid #725eed; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
                              <p style="margin: 0 0 6px; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">📋 Subject</p>
                              <p style="margin: 0; color: #2d236d; font-size: 17px; font-weight: 700;">${subject}</p>
                            </td>
                          </tr>
                        </table>
                        
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 35px;">
                          <tr>
                            <td style="padding: 24px; background: linear-gradient(135deg, #f8f9fa 0%, #fafbfc 100%); border-left: 4px solid #fbeb78; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
                              <p style="margin: 0 0 12px; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">💬 Message</p>
                              <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- Reply Button -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td align="center" style="padding: 10px 0 20px;">
                              <a href="mailto:${email}" style="display: inline-block; padding: 16px 50px; background: linear-gradient(135deg, #725eed 0%, #2d236d 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(114, 94, 237, 0.3); transition: all 0.3s;">
                                ✉️ Reply to ${name.split(' ')[0]}
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 35px 40px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); text-align: center; border-top: 1px solid #e8e8e8;">
                        <p style="margin: 0 0 12px; color: #999; font-size: 14px; line-height: 1.6;">
                          This email was automatically generated from your website contact form
                        </p>
                        <p style="margin: 0; color: #bbb; font-size: 12px;">
                          © ${new Date().getFullYear()} <strong style="color: #725eed;">TrybeNode</strong> · All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Optionally send confirmation email to user
    await resend.emails.send({
      from: 'TrybeNode <contact@trybenode.space>',
      to: email,
      subject: 'Thank you for contacting TrybeNode',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <!-- Header with Logo -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #2d236d 0%, #725eed 100%); padding: 50px 40px; text-align: center; position: relative;">
                        <img src="https://trybenode.online/logo.png" alt="TrybeNode" style="height: 50px; width: auto; margin-bottom: 20px; display: inline-block;" />
                        <h1 style="margin: 0; color: #fbeb78; font-size: 36px; font-weight: 700; letter-spacing: -0.5px;">Thank You! 🎉</h1>
                        <p style="margin: 15px 0 0; color: rgba(255, 255, 255, 0.95); font-size: 18px; font-weight: 500;">We've received your message</p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 50px 40px;">
                        <p style="margin: 0 0 25px; color: #2d236d; font-size: 22px; font-weight: 700;">Hi ${name.split(' ')[0]},</p>
                        
                        <p style="margin: 0 0 20px; color: #555; font-size: 16px; line-height: 1.8;">
                          Thank you for reaching out to <strong style="color: #725eed;">TrybeNode</strong>! 🚀 We've received your message and our team will get back to you within <strong>24 hours</strong>.
                        </p>
                        
                        <p style="margin: 0 0 35px; color: #666; font-size: 16px; line-height: 1.8;">
                          In the meantime, feel free to explore our website to learn more about our services and innovative projects.
                        </p>
                        
                        <!-- Summary Box -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 35px;">
                          <tr>
                            <td style="padding: 28px; background: linear-gradient(135deg, #f8f9fa 0%, #fafbfc 100%); border-radius: 10px; border-left: 4px solid #fbeb78; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                              <p style="margin: 0 0 18px; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">📝 Your Message Summary</p>
                              <p style="margin: 0 0 12px; color: #2d236d; font-size: 17px; font-weight: 700;">Subject: ${subject}</p>
                              <p style="margin: 0; color: #666; font-size: 15px; line-height: 1.7;">We'll respond to your inquiry about <strong>"${subject}"</strong> as soon as possible. Our team is excited to help you!</p>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- CTA Button -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                          <tr>
                            <td align="center" style="padding: 10px 0;">
                              <a href="https://trybenode.online" style="display: inline-block; padding: 18px 50px; background: linear-gradient(135deg, #725eed 0%, #2d236d 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(114, 94, 237, 0.3);">
                                🌐 Visit Our Website
                              </a>
                            </td>
                          </tr>
                        </table>
                        
                        <div style="margin: 35px 0 0; padding: 25px; background: linear-gradient(135deg, #fbeb78 0%, #fef5c7 100%); border-radius: 8px; border-left: 4px solid #2d236d;">
                          <p style="margin: 0 0 8px; color: #2d236d; font-size: 15px; line-height: 1.7;">
                            Best regards,<br>
                            <strong style="font-size: 17px; color: #725eed;">The TrybeNode Team</strong> 💜
                          </p>
                        </div>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 40px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); text-align: center; border-top: 1px solid #e8e8e8;">
                        <p style="margin: 0 0 18px; color: #2d236d; font-size: 15px; font-weight: 700;">
                          📞 Contact Us
                        </p>
                        <p style="margin: 0 0 8px; color: #666; font-size: 14px; line-height: 1.6;">
                          📧 <a href="mailto:contact@trybenode.online" style="color: #725eed; text-decoration: none; font-weight: 600;">contact@trybenode.online</a> 
                          <span style="color: #ddd; margin: 0 8px;">|</span> 
                          📱 <a href="tel:+2348101502547" style="color: #725eed; text-decoration: none; font-weight: 600;">+234 810 150 2547</a>
                        </p>
                        <p style="margin: 0 0 20px; color: #999; font-size: 13px;">
                          📍 Leadcity University, Ibadan, Nigeria
                        </p>
                        <div style="margin: 20px 0; height: 1px; background: linear-gradient(90deg, transparent, #e8e8e8, transparent);"></div>
                        <p style="margin: 0; color: #bbb; font-size: 12px;">
                          © ${new Date().getFullYear()} <strong style="color: #725eed;">TrybeNode</strong> · All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
