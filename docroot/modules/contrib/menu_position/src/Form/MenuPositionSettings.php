<?php

namespace Drupal\menu_position\Form;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Routing\RouteBuilderInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class MenuPositionSettings.
 *
 * @package Drupal\menu_position\Form
 */
class MenuPositionSettings extends ConfigFormBase {

  /**
   * The Route Builder.
   *
   * @var \Drupal\Core\Routing\RouteBuilderInterface
   */
  protected $route_builder;

  /**
   * {@inheritdoc}
   */
  public function __construct(
    ConfigFactoryInterface $config_factory,
    RouteBuilderInterface $route_builder
  ) {
    parent::__construct($config_factory);
    $this->route_builder = $route_builder;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('router.builder')
    );
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'menu_position.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'menu_position_settings';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('menu_position.settings');

    $form = [];
    $form['menu_position_active_link_display'] = [
      '#type' => 'radios',
      '#title' => $this->t('When a menu position rule matches:'),
      '#options' => [
        'parent' => $this->t('Mark the rule\'s parent menu item as being "active".'),
        'child' => $this->t("Insert the current page's title into the menu tree."),
        'none' => $this->t('Don\'t mark any menu item as being "active".'),
      ],
      '#default_value' => $config->get('link_display'),
      '#description' => $this->t("By default, a matching menu position rule will mark the rule's parent menu item as active."),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('menu_position.settings')
      ->set('link_display', $form_state->getValue('menu_position_active_link_display'))
      ->save();

    // Flush appropriate menu cache.
    $this->route_builder->rebuild();

    parent::submitForm($form, $form_state);
  }

}
