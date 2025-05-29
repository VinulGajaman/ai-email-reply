package com.email.email_writer.service;

import com.email.email_writer.dto.EmailRequest;

public interface EmailGeneratorService {

    public String generateEmailReply(EmailRequest emailRequest);
}
