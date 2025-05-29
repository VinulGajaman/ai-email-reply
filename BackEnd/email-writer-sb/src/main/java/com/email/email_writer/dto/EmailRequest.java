package com.email.email_writer.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class EmailRequest {

    private String emailContent;
    private String tone;
}
