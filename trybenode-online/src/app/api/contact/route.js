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
      from: 'TrybeNode Website <noreply@trybenode.online>',
      to: [process.env.TRYBENODE_EMAIL || 'contact@trybenode.online'],
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
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #2d236d 0%, #725eed 100%); padding: 40px 30px; text-align: center;">
                        <h1 style="margin: 0; color: #fbeb78; font-size: 28px; font-weight: bold;">New Contact Submission</h1>
                        <p style="margin: 10px 0 0; color: #ffffff; font-size: 16px; opacity: 0.9;">TrybeNode Website</p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <p style="margin: 0 0 30px; color: #666; font-size: 16px; line-height: 1.6;">
                          You have received a new contact form submission from your website.
                        </p>
                        
                        <!-- Contact Details -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                          <tr>
                            <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #725eed;">
                              <p style="margin: 0 0 5px; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                              <p style="margin: 0; color: #333; font-size: 16px; font-weight: 600;">${name}</p>
                            </td>
                          </tr>
                        </table>
                        
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                          <tr>
                            <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #725eed;">
                              <p style="margin: 0 0 5px; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                              <p style="margin: 0;">
                                <a href="mailto:${email}" style="color: #725eed; font-size: 16px; font-weight: 600; text-decoration: none;">${email}</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                        
                        ${phone ? `
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                          <tr>
                            <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #725eed;">
                              <p style="margin: 0 0 5px; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</p>
                              <p style="margin: 0;">
                                <a href="tel:${phone}" style="color: #725eed; font-size: 16px; font-weight: 600; text-decoration: none;">${phone}</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                        ` : ''}
                        
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                          <tr>
                            <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #725eed;">
                              <p style="margin: 0 0 5px; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                              <p style="margin: 0; color: #333; font-size: 16px; font-weight: 600;">${subject}</p>
                            </td>
                          </tr>
                        </table>
                        
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                          <tr>
                            <td style="padding: 20px; background-color: #f8f9fa; border-left: 4px solid #725eed; border-radius: 4px;">
                              <p style="margin: 0 0 10px; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                              <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- Reply Button -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td align="center" style="padding: 20px 0;">
                              <a href="mailto:${email}" style="display: inline-block; padding: 14px 40px; background-color: #725eed; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">Reply to ${name.split(' ')[0]}</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 30px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #e0e0e0;">
                        <p style="margin: 0 0 10px; color: #999; font-size: 14px;">
                          This email was sent from your website contact form
                        </p>
                        <p style="margin: 0; color: #999; font-size: 12px;">
                          © ${new Date().getFullYear()} TrybeNode. All rights reserved.
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
      from: 'TrybeNode <noreply@trybenode.online>',
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
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #2d236d 0%, #725eed 100%); padding: 40px 30px; text-align: center;">
                        <h1 style="margin: 0; color: #fbeb78; font-size: 28px; font-weight: bold;">Thank You!</h1>
                        <p style="margin: 10px 0 0; color: #ffffff; font-size: 16px; opacity: 0.9;">We've received your message</p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <p style="margin: 0 0 20px; color: #333; font-size: 18px; font-weight: 600;">Hi ${name.split(' ')[0]},</p>
                        
                        <p style="margin: 0 0 20px; color: #666; font-size: 16px; line-height: 1.6;">
                          Thank you for reaching out to TrybeNode! We've received your message and our team will get back to you within 24 hours.
                        </p>
                        
                        <p style="margin: 0 0 30px; color: #666; font-size: 16px; line-height: 1.6;">
                          In the meantime, feel free to explore our website to learn more about our services and projects.
                        </p>
                        
                        <!-- Summary Box -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px; background-color: #f8f9fa; border-radius: 6px; overflow: hidden;">
                          <tr>
                            <td style="padding: 20px;">
                              <p style="margin: 0 0 15px; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Your Message Summary</p>
                              <p style="margin: 0 0 10px; color: #333; font-size: 15px;"><strong>Subject:</strong> ${subject}</p>
                              <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">We'll respond to your inquiry about "${subject}" as soon as possible.</p>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- CTA Button -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td align="center" style="padding: 20px 0;">
                              <a href="https://trybenode.online" style="display: inline-block; padding: 14px 40px; background-color: #725eed; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">Visit Our Website</a>
                            </td>
                          </tr>
                        </table>
                        
                        <p style="margin: 30px 0 0; color: #666; font-size: 14px; line-height: 1.6;">
                          Best regards,<br>
                          <strong style="color: #725eed;">The TrybeNode Team</strong>
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 30px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #e0e0e0;">
                        <p style="margin: 0 0 15px; color: #666; font-size: 14px;">
                          <strong>Contact Us</strong>
                        </p>
                        <p style="margin: 0 0 5px; color: #999; font-size: 13px;">
                          📧 contact@trybenode.online | 📱 +234 810 150 2547
                        </p>
                        <p style="margin: 0 0 15px; color: #999; font-size: 13px;">
                          📍 Leadcity University, Ibadan, Nigeria
                        </p>
                        <p style="margin: 0; color: #999; font-size: 12px;">
                          © ${new Date().getFullYear()} TrybeNode. All rights reserved.
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
