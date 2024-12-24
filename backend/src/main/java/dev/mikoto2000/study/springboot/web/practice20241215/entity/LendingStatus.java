package dev.mikoto2000.study.springboot.web.practice20241215.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * LendingStatus
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LendingStatus {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
}

